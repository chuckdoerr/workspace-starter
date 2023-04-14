import { init as workspacePlatformInit, BrowserInitConfig } from "@openfin/workspace-platform";
import { deregister, register, show } from "./home";

window.addEventListener("DOMContentLoaded", async () => {
	const platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => bootstrap());
	await initialisePlatform();
});

export async function initialisePlatform() {
	console.log("Initialising platform");
	const browser: BrowserInitConfig = {};

	await workspacePlatformInit({
		browser
	});
}

export async function bootstrap() {
	// you can kick off your bootstrapping process here where you may decide to prompt for authentication,
	// gather reference data etc before starting workspace and interacting with it.
	console.log("Initialising the bootstrapper");
	await register();
	await show();
	const providerWindow = fin.Window.getCurrentSync();
	await providerWindow.once("close-requested", async (event) => {
		await deregister();
		await fin.Platform.getCurrentSync().quit();
	});
}
