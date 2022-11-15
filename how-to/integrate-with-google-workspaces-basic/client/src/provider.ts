import { getCurrentSync, init as workspacePlatformInit } from "@openfin/workspace-platform";
import { connect } from "./googleWorkspaces";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "./settings";
import type { GoogleWorkspacesConnection } from "./shapes";

let googleWorkspacesConnection: GoogleWorkspacesConnection;
let people: gapi.client.people.Person[] = [];

let errorStatus: HTMLDivElement;
let btnConnect: HTMLButtonElement;
let btnDisconnect: HTMLButtonElement;
let connectionStatus: HTMLParagraphElement;
let btnQuery: HTMLButtonElement;
let txtQuery: HTMLInputElement;
let tableResults: HTMLTableElement;
let bodyResults: HTMLTableSectionElement;

async function init() {
	await workspacePlatformInit({
		browser: {}
	});
	errorStatus = document.querySelector<HTMLDivElement>("#errorStatus");
	btnConnect = document.querySelector<HTMLButtonElement>("#btnConnect");
	btnDisconnect = document.querySelector<HTMLButtonElement>("#btnDisconnect");
	connectionStatus = document.querySelector<HTMLParagraphElement>("#connectionStatus");
	btnQuery = document.querySelector<HTMLButtonElement>("#btnQuery");
	txtQuery = document.querySelector<HTMLInputElement>("#txtQuery");
	tableResults = document.querySelector<HTMLTableElement>("#tableResults");
	bodyResults = document.querySelector<HTMLTableSectionElement>("#bodyResults");

	updateConnectionStatus();
	if (CLIENT_ID === "" || CLIENT_SECRET === "") {
		errorStatus.textContent =
			"You must complete the CLIENT_ID and CLIENT_SECRET in settings.ts before the example will function";
		btnConnect.disabled = true;
		return;
	}

	btnConnect.addEventListener("click", async () => {
		googleWorkspacesConnection = undefined;
		updateConnectionStatus();

		try {
			people = [];
			btnConnect.disabled = true;
			connectionStatus.textContent = "Google Workspaces is connecting";

			const scopes = ["https://www.googleapis.com/auth/directory.readonly"];
			googleWorkspacesConnection = await connect(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, scopes);
		} catch (err) {
			errorStatus.textContent = `Error connecting to Google Workspaces\n${
				err instanceof Error ? err.message : JSON.stringify(err)
			}`;
		}
		updateConnectionStatus();
	});

	btnDisconnect.addEventListener("click", async () => {
		try {
			people = [];
			if (googleWorkspacesConnection) {
				await googleWorkspacesConnection.disconnect();
			}
		} catch {}
		googleWorkspacesConnection = undefined;
		updateConnectionStatus();
	});

	btnQuery.addEventListener("click", async () => {
		try {
			btnQuery.disabled = true;
			txtQuery.disabled = true;
			errorStatus.textContent = "";

			people = [];
			updateTable();

			const fields = ["names", "emailAddresses"];

			const response =
				await googleWorkspacesConnection.executeApiRequest<gapi.client.people.ListDirectoryPeopleResponse>(
					`https://people.googleapis.com/v1/people:searchDirectoryPeople?query=${encodeURIComponent(
						txtQuery.value
					)}&readMask=${encodeURIComponent(
						fields.join(",")
					)}&sources=DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE&sources=DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT`
				);

			people = response?.people ?? [];
			updateTable();
		} catch (err) {
			errorStatus.textContent = `Error querying Google Workspaces\n${
				err instanceof Error ? err.message : JSON.stringify(err)
			}`;
		} finally {
			btnQuery.disabled = false;
			txtQuery.disabled = false;
		}
	});
}

function updateConnectionStatus() {
	if (googleWorkspacesConnection) {
		connectionStatus.textContent = `Google Workspaces is connected as ${googleWorkspacesConnection.currentUser.name}`;
		btnConnect.disabled = true;
		btnDisconnect.disabled = false;
		btnQuery.disabled = false;
		txtQuery.disabled = false;
	} else {
		connectionStatus.textContent = "Google Workspaces is disconnected";
		btnConnect.disabled = false;
		btnDisconnect.disabled = true;
		btnQuery.disabled = true;
		txtQuery.disabled = true;
	}
	updateTable();
}

function updateTable() {
	tableResults.style.display = people.length > 0 ? "table" : "none";

	if (people.length === 0) {
		bodyResults.innerHTML = "";
	} else {
		for (const contact of people) {
			const emailCell = document.createElement("td");
			emailCell.textContent = contact.emailAddresses?.length
				? contact.emailAddresses[0].value ?? "No email"
				: "No email";

			const openButton = document.createElement("button");
			openButton.textContent = "Open";
			openButton.type = "button";
			openButton.classList.add("small");
			openButton.addEventListener("click", async () => {
				await openContact(contact);
			});

			const buttonCell = document.createElement("td");
			buttonCell.append(openButton);

			const row = document.createElement("tr");
			row.append(emailCell);
			row.append(buttonCell);
			bodyResults.append(row);
		}
	}
}

async function openContact(person: gapi.client.people.Person) {
	const viewOptions = {
		url: `https://contacts.google.com/${person.emailAddresses[0]?.value}`,
		target: { name: "", url: "", uuid: "" }
	};
	const platform = getCurrentSync();
	await platform.createView(viewOptions);
}

window.addEventListener("DOMContentLoaded", async () => {
	await init();
});
