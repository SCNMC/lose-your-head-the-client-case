import createClient from "$lib/prismicClient.js";

export async function load({ fetch, request }) {
	const client = createClient(fetch);
	const page = await client.getSingle("midterm");

	let standards = await Promise.all(
		page.data.standards.map(async (s) => {
			const standard = await client.getByUID("standard", s.standard.uid);

			const chapters = await Promise.all(
				standard.data.chapters.map(async (s) => {
					const chapter = await client.getByUID("chapter", s.chapter.uid);

					return chapter;
				})
			);
			standard.data.chapters = chapters;

			return standard;
		})
	);

	standards = standards.map((standard) => standard.data);

	if (page) {
		return {
			page: { ...page.data },
			standards,
		};

		return {
			status: 404,
		};
	}
}
