import {
	getCurrentSync,
	GlobalContextMenuItemTemplate,
	GlobalContextMenuOptionType,
	PageTabContextMenuItemTemplate,
	PageTabContextMenuOptionType,
	ViewTabContextMenuTemplate,
	ViewTabMenuOptionType
} from "@openfin/workspace-platform";
import { checkConditions } from "./conditions";
import { createLogger } from "./logger-provider";
import { initializeModules, loadModules } from "./modules";
import { getSettings } from "./settings";
import type { ModuleDefinition, ModuleEntry, ModuleHelpers } from "./shapes";
import type {
	MenuEntry,
	MenuOptionType,
	MenuPositionOperation,
	MenusProviderOptions,
	Menus,
	MenuTemplateType,
	MenuType
} from "./shapes/menu-shapes";

const logger = createLogger("Menu");

let menuModules: ModuleEntry<Menus, unknown, unknown, ModuleDefinition>[] = [];

export async function init(menuProviderOptions: MenusProviderOptions, helpers: ModuleHelpers): Promise<void> {
	menuModules = await loadModules<Menus>(menuProviderOptions, "menus");
	await initializeModules<Menus>(menuModules, helpers);
}

function updateMenuEntries<T extends MenuTemplateType, U extends MenuOptionType<T>>(
	menuEntries: T[],
	positionType?: U,
	positionOperation?: MenuPositionOperation,
	positionCustomId?: string,
	entry?: T
): number {
	if (positionOperation === "start") {
		menuEntries.unshift(entry);
	} else if (positionOperation === "end") {
		menuEntries.push(entry);
	} else {
		let entryIndex: number;

		if (positionType === "Custom") {
			if (positionCustomId === undefined) {
				logger.warn("Entry type is specified as custom but no customId was provided");
			}

			entryIndex = menuEntries.findIndex(
				(menuEntry) =>
					menuEntry.data?.type === positionType && menuEntry.data?.action?.id === positionCustomId
			);

			if (entryIndex === -1) {
				logger.warn(`Unable to find menu with entry type: ${positionType} and customId: ${positionCustomId}`);
			}
		} else {
			entryIndex = menuEntries.findIndex((menuEntry) => menuEntry.data?.type === positionType);

			if (entryIndex === -1) {
				logger.warn(`Unable to find menu with entry type: ${positionType}`);
			}
		}

		if (entryIndex !== -1) {
			switch (positionOperation) {
				case "delete": {
					menuEntries.splice(entryIndex);
					break;
				}
				case "replaceLabel": {
					if (entry === undefined || entry.label === undefined) {
						logger.warn(
							`Asked to replace label of menu entry but not provided an entry to grab a label from or given an empty label. Target menu data type: ${positionType}`
						);
					} else {
						menuEntries[entryIndex].label = entry.label;
					}
					break;
				}
				case "after": {
					if (entry === undefined) {
						logger.warn(
							`You cannot insert a menu entry after the menu entry with data type: ${positionType} if you do not specify a menu entry`
						);
					} else {
						menuEntries.splice(entryIndex + 1, 0, entry);
					}
					break;
				}
				case "before": {
					if (entry === undefined) {
						logger.warn(
							`You cannot insert a menu entry before the menu entry with data type: ${positionType} if you do not specify a menu entry`
						);
					} else if (entryIndex === 0) {
						menuEntries.unshift(entry);
					} else {
						menuEntries.splice(entryIndex, 0, entry);
					}
					break;
				}
			}
		}
	}
	return menuEntries.indexOf(entry);
}

export async function buildMenu<T extends MenuTemplateType, U extends MenuOptionType<T>>(
	defaultEntries: T[],
	configEntries?: MenuEntry<U>[]
): Promise<T[]> {
	const menuItems = defaultEntries ?? [];

	if (Array.isArray(configEntries)) {
		const platform = getCurrentSync();

		for (const menuItem of configEntries) {
			if (menuItem.include || menuItem.include === undefined) {
				const canShow = await checkConditions(platform, menuItem.conditions);

				if (canShow) {
					const insertedIndex = updateMenuEntries(
						menuItems,
						menuItem.position.type,
						menuItem.position.operation,
						menuItem.position.customId,
						{
							label: menuItem.label,
							data: menuItem.data
						} as unknown as T
					);

					if (insertedIndex >= 0) {
						const sep = { type: "separator" } as T;
						if (menuItem.separator === "before") {
							if (insertedIndex === 0) {
								menuItems.unshift(sep);
							} else {
								menuItems.splice(insertedIndex, 0, sep);
							}
						} else if (menuItem.separator === "after") {
							if (insertedIndex === menuItems.length - 1) {
								menuItems.push(sep);
							} else {
								menuItems.splice(insertedIndex + 1, 0, sep);
							}
						}
					}
				}
			}
		}
	}

	return menuItems;
}

export async function getGlobalMenu(
	defaultGlobalContextMenu?: GlobalContextMenuItemTemplate[]
): Promise<GlobalContextMenuItemTemplate[]> {
	const settings = await getSettings();
	const menuEntries = (settings?.browserProvider?.globalMenu ?? []).concat(
		await getModuleMenuEntries<GlobalContextMenuOptionType>("global")
	);
	return buildMenu(defaultGlobalContextMenu, menuEntries);
}

export async function getPageMenu(
	defaultPageContextMenu: PageTabContextMenuItemTemplate[]
): Promise<PageTabContextMenuItemTemplate[]> {
	const settings = await getSettings();
	const menuEntries = (settings?.browserProvider?.pageMenu ?? []).concat(
		await getModuleMenuEntries<PageTabContextMenuOptionType>("page")
	);
	return buildMenu(defaultPageContextMenu, menuEntries);
}

export async function getViewMenu(
	defaultViewContextMenu: ViewTabContextMenuTemplate[]
): Promise<ViewTabContextMenuTemplate[]> {
	const settings = await getSettings();
	const menuEntries = (settings?.browserProvider?.viewMenu ?? []).concat(
		await getModuleMenuEntries<ViewTabMenuOptionType>("view")
	);
	return buildMenu(defaultViewContextMenu, menuEntries);
}

async function getModuleMenuEntries<T extends MenuOptionType<MenuTemplateType>>(
	menuType: MenuType
): Promise<MenuEntry<T>[]> {
	const platform = getCurrentSync();
	let menuEntries: MenuEntry<T>[] = [];
	for (const menuModule of menuModules) {
		const entries = await menuModule.implementation.get(menuType, platform);
		if (entries) {
			menuEntries = menuEntries.concat(entries as MenuEntry<T>[]);
		}
	}
	return menuEntries;
}
