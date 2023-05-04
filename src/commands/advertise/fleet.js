export function advertiseFleet({ data }) {
	let custom_id = "advertiseFleet";
	if (data.resolved?.attachments) {
		const messageId = data.id;
		const imageId = Object.keys(data.resolved.attachments)[0];
		const fileName = data.resolved.attachments[imageId].filename;
		custom_id += "#" + [messageId, imageId, fileName].join("/");
		if (fileName.length > 30)
			return {
				type: 4,
				data: {
					content: "File name is too long, it needs to be under 30 characters.",
					flags: 1 << 6,
				},
			};
	}

	return {
		type: 9, // MODAL
		data: {
			title: "Advertise your fleet",
			custom_id,
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
							custom_id: "subfleets",
							label: "Subfleet(s)",
							style: 1,
							min_length: 1,
							max_length: 30,
							placeholder: "Space Juniors",
							required: false,
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
							required: false,
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
