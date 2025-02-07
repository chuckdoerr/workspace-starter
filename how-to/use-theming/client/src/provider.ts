import type OpenFin from "@openfin/core";
import { ACTION_IDS } from "./actions";
import { init as bootstrap } from "./bootstrapper";
import { init as initialisePlatform } from "./platform";
import type { CustomUserAppArgs, InitParams, ThemingPayload } from "./shapes";

window.addEventListener("DOMContentLoaded", async () => {
	const themingPayload = await handleInitParams();

	const platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => bootstrap());

	await fin.InterApplicationBus.subscribe(
		{ uuid: fin.me.identity.uuid },
		"theme-restart",
		async (payload) => {
			window.localStorage.setItem("customAction", ACTION_IDS.applyTheme);
			window.localStorage.setItem("customPayload", JSON.stringify(payload));
			await fin.Application.getCurrentSync().restart();
		}
	);

	await initialisePlatform(themingPayload);
});

async function handleInitParams(): Promise<ThemingPayload | undefined> {
	// Find any theming options passed on the command line and override the defaults
	const app = fin.Application.getCurrentSync();
	const appInfo = await app.getInfo();
	const customInitOptions = appInfo.initialOptions as OpenFin.ApplicationCreationOptions & CustomUserAppArgs;
	let themingPayload: ThemingPayload | undefined;

	if (customInitOptions?.userAppConfigArgs?.action === ACTION_IDS.applyTheme) {
		themingPayload = extractPayloadFromParams<ThemingPayload>(customInitOptions?.userAppConfigArgs);
		console.log("Loaded payload from command line", themingPayload);
	}

	// If there is an action stored in local storage use that as it is from
	// a restart requested, but then remove it
	const loadedAction = window.localStorage.getItem("customAction");
	if (loadedAction !== undefined) {
		if (loadedAction === ACTION_IDS.applyTheme) {
			const loadedPayload = window.localStorage.getItem("customPayload");
			themingPayload = JSON.parse(loadedPayload) as ThemingPayload;
			console.log("Loaded payload from localStorage", themingPayload);
		}

		window.localStorage.removeItem("customAction");
		window.localStorage.removeItem("customPayload");
	}

	// If run was requested when we are already running restart the app
	// as we can only update the theming options by re-initialising the platform.
	const platform = fin.Platform.getCurrentSync();
	await platform.Application.addListener("run-requested", async (params?: CustomUserAppArgs) => {
		console.log("Run requested with action", params?.userAppConfigArgs?.action);

		if (params?.userAppConfigArgs?.action === ACTION_IDS.applyTheme) {
			const runThemingOptions = extractPayloadFromParams<ThemingPayload>(params?.userAppConfigArgs);

			console.log("Store theming options and restart app");
			window.localStorage.setItem("customAction", ACTION_IDS.applyTheme);
			if (runThemingOptions !== undefined) {
				window.localStorage.setItem("customPayload", JSON.stringify(runThemingOptions));
			}

			await app.restart();
		} else {
			console.warn("Unrecognized action in run-requested listener", params.userAppConfigArgs?.action);
		}
	});

	return themingPayload;
}

function extractPayloadFromParams<T>(initParams?: InitParams): T | undefined {
	try {
		if (typeof initParams?.payload === "string") {
			const plainJson = atob(initParams?.payload);
			const payload = JSON.parse(plainJson) as T;
			console.log("Extracted payload", payload);
			return payload;
		}
	} catch (err) {
		console.error("Error decoding payload, it should be Base64 encoded", initParams, err);
	}
}
