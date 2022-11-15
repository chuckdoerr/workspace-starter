export interface GoogleWorkspacesConnection {
	currentUser: GoogleUserProfile;
	disconnect(): Promise<void>;
	executeApiRequest<T>(
		url: string,
		httpVerb?: "GET" | "PUT" | "POST" | "DELETE" | "PATCH",
		data?: unknown,
		headers?: { [id: string]: string }
	): Promise<T>;
}

export interface GoogleUserProfile {
	sub: string;
	name: string;
	given_name: string;
	family_name: string;
	picture: string;
	locale: string;
}

export interface OAuth2Tokens {
	access_token: string;
	expires_in: string;
	id_token: string;
	scope: string;
	token_type: string;
}
