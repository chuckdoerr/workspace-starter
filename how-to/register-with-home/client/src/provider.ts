import type OpenFin from "@openfin/core";
import { Home } from "@openfin/workspace";
import { init } from "@openfin/workspace-platform";
import { deregister, register } from "./home";
import type { CustomSettings } from "./shapes";

window.addEventListener("DOMContentLoaded", async () => {
	// Load the settings from the manifest
	const settings = await getManifestCustomSettings();

	// When the platform api is ready we bootstrap the platform.
	const platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => platformBootstrap(settings));

	// The DOM is ready so initialize the platform
	// Provide some default icons for the browser windows
	console.log("Initialising workspace platform");
	await init({
		browser: {
			defaultWindowOptions: {
				icon: settings.homeProvider?.icon,
				workspacePlatform: {
					pages: null,
					favicon: settings.homeProvider?.icon
				}
			}
		}
	});
});

/**
 * Bring the platform to life.
 * @param settings The settings.
 */
export async function platformBootstrap(settings: CustomSettings): Promise<void> {
	console.log("Initialising the bootstrapper");

	// Register with home and show it
	await register(settings);
	await Home.show();

	// When the platform requests to be close we deregister from home and quit
	const providerWindow = fin.Window.getCurrentSync();
	await providerWindow.once("close-requested", async () => {
		await deregister(settings);
		await fin.Platform.getCurrentSync().quit();
	});
}

/**
 * Read the custom settings from the manifest.fin.json
 * @returns The custom settings.
 */
export async function getManifestCustomSettings(): Promise<CustomSettings> {
	// Get the manifest for the current application
	const app = await fin.Application.getCurrent();

	// Extract the custom settings for this application
	const manifest: OpenFin.Manifest & { customSettings?: CustomSettings } = await app.getManifest();
	return manifest.customSettings ?? {};
}
