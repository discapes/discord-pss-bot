const colors = [
	6821567, 6893541, 10564832, 12338152, 15688959, 16286463, 16744942, 16625407, 16763895, 16769270, 16759249, 16748747,
	16728261, 11796603, 14222215, 15859861, 16199808, 13983853, 15369596, 16752009, 16765330, 15782542, 13419613,
	11386468, 7384641, 11851137, 14611881, 16646135, 16580565, 16775572, 9568170, 980131, 53185, 4390904, 1760511, 769013,
	41950, 42451, 36062, 5921528,
];

export function advertiseFleet({ data, member }) {
	const fleetName = data.components[0].components[0].value;
	const trophyRequirement = data.components[1].components[0].value;
	const description = data.components[2].components[0].value;
	const color = colors[Math.floor(Math.random() * colors.length)];

	return {
		type: 4, // respond to an interaction with a message
		data: {
			tts: false,
			embeds: [
				{
					type: "rich",
					title: fleetName,
					color,
					description: `<@${member.user.id}> is looking for fleet members!
                
**Fleet name**:
${fleetName}

**Trophy requirement**:
${trophyRequirement}  🏆

**Description**:
${description}`,
				},
			],
		},
	};
}
