import { deregister, register, show } from "./home";
import { deregister as deregisterIntegration, register as registerIntegration } from "./integrations";
import { getSettings } from "./settings";
import * as templateHelpers from "./templates";
import { getCurrentPalette } from "./themes";

export async function init() {
	// you can kick off your bootstrapping process here where you may decide to prompt for authentication,
	// gather reference data etc before starting workspace and interacting with it.
	console.log("Initialising the bootstrapper");
	const settings = await getSettings();

	const homeRegistration = await register();
	await show();

	await registerIntegration(settings.integrationProvider, {
		templateHelpers,
		getCurrentPalette,
		openUrl: async (url) => fin.System.openUrlWithBrowser(url),
		setSearchQuery: homeRegistration.setSearchQuery
			? async (query) => homeRegistration.setSearchQuery(query)
			: undefined
	});

	const providerWindow = fin.Window.getCurrentSync();
	await providerWindow.once("close-requested", async (event) => {
		await deregisterIntegration(settings.integrationProvider);
		await deregister();
		await fin.Platform.getCurrentSync().quit();
	});
}
