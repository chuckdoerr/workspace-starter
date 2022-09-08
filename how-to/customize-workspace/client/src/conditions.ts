import type { WorkspacePlatformModule } from "@openfin/workspace-platform";
import { isAuthenticationEnabled, isAuthenticationRequired } from "./auth";
import type { ConditionMap, Conditions, ConditionsProviderOptions } from "./conditions-shapes";
import type { ModuleDefinition, ModuleEntry } from "./module-shapes";
import { initializeModules, loadModules } from "./modules";
import { isShareEnabled } from "./share";

let conditionsModules: ModuleEntry<Conditions, unknown, unknown, ModuleDefinition>[] = [];

const allConditions: ConditionMap = {};

export async function init(conditionsProviderOptions?: ConditionsProviderOptions): Promise<void> {
	conditionsModules = await loadModules<Conditions>(conditionsProviderOptions, "conditions");
	await initializeModules<Conditions>(conditionsModules);

	allConditions.authenticated = async () => isAuthenticationEnabled() && !(await isAuthenticationRequired());
	allConditions.sharing = async () => isShareEnabled;

	for (const conditionModule of conditionsModules) {
		const conditions = await conditionModule.implementation.get();
		for (const condition in conditions) {
			allConditions[condition] = conditions[condition];
		}
	}
}

export async function checkConditions(
	platform: WorkspacePlatformModule,
	conditionIds: string[]
): Promise<boolean> {
	if (Array.isArray(conditionIds)) {
		for (const conditionId of conditionIds) {
			if (!(await checkCondition(platform, conditionId))) {
				return false;
			}
		}
		return true;
	}

	return true;
}

export async function checkCondition(
	platform: WorkspacePlatformModule,
	conditionId: string
): Promise<boolean> {
	return allConditions[conditionId](platform) ?? false;
}
