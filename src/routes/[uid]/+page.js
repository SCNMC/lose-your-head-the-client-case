
import createClient from "$lib/prismicClient.js";

export async function load({ fetch, params }) {
	const client = createClient(fetch);
	const { uid } = params;
	const standard = await client.getByUID("standard", uid);

	const chapters = await Promise.all(
		standard.data.chapters.map(async (s) => {
			const chapter = await client.getByUID("chapter", s.chapter.uid);

			return chapter;
		})
	);

	standard.data.chapters = chapters;

	if (standard) {
		return {
			standard,
		};
	}
	return {
		status: 404,
	};
}