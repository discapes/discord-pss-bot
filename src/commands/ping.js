export function ping(interaction) {
	return {
		type: 4,
		data: {
			content: "pong!",
		},
	};
}
