export function advertiseFleet({ data }) {
	return {
		type: 9, // MODAL
		data: {
			title: "Advertise your fleet",
			custom_id: "advertiseFleet",
			components: [
				{
					type: 1,
					components: [
						{
							type: 4,
							custom_id: "name",
							label: "Fleet name",
							style: 1,
							min_length: 1,
							max_length: 30,
							placeholder: "Space Invaders",
							required: true,
						},
					],
				},
				{
					type: 1,
					components: [
						{
							type: 4,
							custom_id: "trophy",
							label: "Trophy requirement",
							style: 1,
							min_length: 1,
							max_length: 10,
							placeholder: "1000",
							required: true,
						},
					],
				},
				{
					type: 1,
					components: [
						{
							type: 4,
							custom_id: "description",
							label: "Description",
							style: 2,
							min_length: 1,
							max_length: 2000,
							placeholder: "A brief description.\nCan be multiple lines.",
							required: true,
						},
					],
				},
			],
		},
	};
}
