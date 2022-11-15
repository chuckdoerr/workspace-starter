/* eslint-disable camelcase */
import type { GoogleUserProfile, GoogleWorkspacesConnection, OAuth2Tokens } from "./shapes";

let tokens: OAuth2Tokens | undefined;

export async function connect(
	clientId: string,
	clientSecret: string,
	redirectUri: string,
	scopes?: string[]
): Promise<GoogleWorkspacesConnection> {
	scopes = scopes ?? [];
	if (!scopes.includes("profile")) {
		scopes.unshift("profile");
	}

	const url = `https://accounts.google.com/o/oauth2/auth?scope=${encodeURIComponent(
		scopes.join(" ")
	)}&response_type=code&access_type=offline&redirect_uri=${encodeURIComponent(
		redirectUri
	)}&client_id=${encodeURIComponent(clientId)}`;

	const responseUri = await getAuthenticationFromUser(url, redirectUri);
	if (!responseUri) {
		throw new Error("Authorization Failed");
	}

	const finalUri = new URL(responseUri);
	if (!finalUri.searchParams.has("code")) {
		throw new Error("Authorization Failed");
	}

	const tokensResponse = await fetch("https://accounts.google.com/o/oauth2/token", {
		method: "POST",
		body: JSON.stringify({
			grant_type: "authorization_code",
			code: finalUri.searchParams.get("code"),
			redirect_uri: redirectUri,
			client_id: clientId,
			client_secret: clientSecret
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (!tokensResponse.ok) {
		throw new Error("Authorization Failed");
	}

	tokens = await tokensResponse.json();

	return {
		currentUser: await getUserProfile(),
		disconnect,
		executeApiRequest
	};
}

async function disconnect(): Promise<void> {}

async function executeApiRequest<T>(
	url: string,
	httpVerb?: "GET" | "PUT" | "POST" | "DELETE" | "PATCH",
	data?: unknown,
	headers?: { [id: string]: string }
): Promise<T> {
	if (!tokens) {
		throw new Error("Authorization Failed");
	}

	headers = headers ?? {};
	headers["Content-Type"] = "application/json";
	headers.Authorization = `Bearer ${tokens.access_token}`;

	const response = await fetch(url, {
		method: httpVerb,
		body: data ? JSON.stringify(data) : undefined,
		headers
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(`HTTP Request failed ${JSON.stringify(json, undefined, "\t")}`);
	}

	return json as T;
}

async function getUserProfile(): Promise<GoogleUserProfile> {
	return executeApiRequest<GoogleUserProfile>("https://www.googleapis.com/oauth2/v3/userinfo");
}

async function openLoginWindow(url: string): Promise<OpenFin.Window> {
	return fin.Window.create({
		name: "google-workspaces-auth-log-in",
		alwaysOnTop: true,
		maximizable: false,
		minimizable: false,
		autoShow: false,
		defaultCentered: true,
		defaultHeight: 700,
		defaultWidth: 600,
		includeInSnapshots: false,
		resizable: false,
		showTaskbarIcon: false,
		saveWindowState: false,
		url
	});
}

async function getAuthenticationFromUser(loginUrl: string, authenticatedUrl: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		openLoginWindow(loginUrl)
			.then(async (win) => {
				const authMatch = new RegExp(authenticatedUrl, "i");

				try {
					if (win !== undefined) {
						const info = await win.getInfo();
						if (authMatch.test(info.url)) {
							await win.close(true);
							return resolve(info.url);
						}
						await win.show(true);
					}
				} catch (error) {
					console.error(
						`Error while checking if login window automatically redirected. Error ${error.message}`
					);
					if (win !== undefined) {
						await win.show(true);
					}
				}

				let statusCheck: number;

				await win.addListener("closed", async () => {
					if (win) {
						window.clearInterval(statusCheck);
						statusCheck = undefined;
						console.info("Auth Window cancelled by user");
						win = undefined;
						return resolve("");
					}
				});
				statusCheck = window.setInterval(async () => {
					if (win !== undefined) {
						const info = await win.getInfo();
						if (authMatch.test(info.url)) {
							window.clearInterval(statusCheck);
							await win.removeAllListeners();
							await win.close(true);
							return resolve(info.url);
						}
					} else {
						return resolve("");
					}
				}, 1000);
				return true;
			})
			.catch((error) => {
				console.error("Error while trying to authenticate the user", error);
			});
	});
}
