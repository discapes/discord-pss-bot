import { env } from "process";
import commands from "./commands/index.js";

export async function updateCommands() {
	const endpoint = `https://discord.com/api/v10/applications/${env.DC_APP_ID}/commands`;
	const json = Object.keys(commands).map((name) => ({
		name,
		description: commands[name].description,
		options: commands[name].options?.map((o) => ({ ...o, fn: undefined })),
		type: 1,
	}));

	const res = await fetch(endpoint, {
		method: "PUT",
		headers: {
			Authorization: "Bot " + env.DC_SECRET,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(json),
	}).then((res) => res.json());
	return res;
}
