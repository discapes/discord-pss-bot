import { advertiseFleet } from "./advertise/fleet.js";
import { advertiseSelf } from "./advertise/self.js";
import { ping } from "./ping.js";

export default {
	advertise: {
		description: "Advertise",
		options: [
			{
				type: 1,
				description: "Advertise a fleet",
				name: "fleet",
				fn: advertiseFleet,
				options: [
					{
						type: 11, // attachement
						name: "image",
						required: false,
						description: "Fleet cover image",
					},
				],
			},
			{
				type: 1,
				description: "Advertise yourself",
				name: "self",
				fn: advertiseSelf,
				options: [
					{
						type: 11, // attachement
						name: "ship",
						required: true,
						description: "A screenshot of your ship",
					},
				],
			},
		],
	},
	ping: {
		description: "Ping the bot",
		fn: ping,
	},
};
