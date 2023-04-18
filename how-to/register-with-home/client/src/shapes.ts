/**
 * The custom settings stored in the manifest.fin.json
 */
export interface CustomSettings {
	appProvider?: AppProvider;
	homeProvider?: HomeProvider;
}

/**
 * Settings for home.
 */
interface HomeProvider {
	id: string;
	title: string;
	icon: string;
	queryMinLength?: number;
	queryAgainst?: string[];
}

/**
 * Settings for app sources.
 */
interface AppProvider {
	appsSourceUrls: string[];
	manifestTypes?: string[];
}

