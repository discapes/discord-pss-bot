import commands from "./commands/index.js";
import modals from "./modals/index.js";
import nacl from "./deps/nacl.cjs";
import { env } from "process";
import { updateCommands } from "./updateCommands.js";

function process(interaction) {
	const { type, data } = interaction;
	if (type == 1) {
		// PING
		return {
			type: 1, // ACK
		};
	} else if (type == 2) {
		// COMMAND
		let fn = null;
		if (data.name in commands) {
			const command = commands[data.name];
			fn = command.fn;
			if (!fn) {
				const subcmd = data.options.find((o) => o.type == 1).name;
				fn = command.options.find((o) => o.name == subcmd).fn;
			}
		}

		if (fn) return fn(interaction);
		else throw new Error("Received unknown command " + data.name);
	} else if (type == 5) {
		// MODAL SUBMIT
		const [modalName, arg] = data.custom_id.split("#");
		if (modalName in modals) {
			return modals[modalName](interaction, arg);
		} else {
			throw new Error("Received unknown modal submission " + data.custom_id);
		}
	} else {
		throw new Error("Received unknown type " + type);
	}
}

export async function handler(event) {
	if ("updateDiscordCommands" in event) {
		const res = await updateCommands();
		return res;
	}

	const rawBody = event.isBase64Encoded ? atob(event.body) : event.body;
	console.log("Received request", event, rawBody);

	if (!verify(event.headers, rawBody)) {
		console.error("!!!Invalid signature");
		return {
			statusCode: 401,
			body: "invalid request signature",
		};
	}

	try {
		const body = JSON.parse(rawBody);
		const result = process(body);
		console.log("!!!Responding with result", result);
		return {
			statusCode: 200,
			body: JSON.stringify(result),
		};
	} catch (e) {
		console.error("!!!Got an error", e);
		return {
			statusCode: 500,
			body: JSON.stringify(e.toString()),
		};
	}
}

function verify(headers, rawBody) {
	const PUBLIC_KEY = env.DC_PUBLIC_KEY;

	const signature = headers["x-signature-ed25519"]; // lowercase
	const timestamp = headers["x-signature-timestamp"];
	const body = rawBody;

	// @ts-ignore
	const isVerified = nacl.sign.detached.verify(
		Buffer.from(timestamp + body),
		Buffer.from(signature, "hex"),
		Buffer.from(PUBLIC_KEY, "hex")
	);

	return isVerified;
}
