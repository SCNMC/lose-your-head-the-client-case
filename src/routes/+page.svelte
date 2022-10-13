<script>
	import Header from "$lib/components/Header.svelte";
	import Mainhero from "$lib/components/Mainhero.svelte";
	import Intro from "$lib/components/Intro.svelte";
	// import Maincontent from "$lib/components/Maincontent.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Standard from "$lib/components/Standard.svelte";
	import StandardChapter from "$lib/components/StandardChapter.svelte";
	import StandardSection from "$lib/components/StandardSection.svelte";
	import Backtotop from "../lib/components/Backtotop.svelte";
	export let data;
	export let standards;
	export let page;
</script>

<Header />
<Mainhero />
<Intro introductionTitle={"Midterm"} introduction={data.page.introduction} />

<StandardSection>
	{#each data.standards as standard}
		<Standard
			standardUID={`/${standard?.uid}`}
			standardTitle={`${standard?.standardnumber}.0 ${standard.title}`}
		>
			{#each standard.chapters as chapter, i}
				<StandardChapter
					chapterTitle={`${standard.standardnumber}.0${i + 1} ${
						chapter.data.title
					}`}
				/>
			{/each}
		</Standard>
	{/each}
</StandardSection>
<Footer />
<Backtotop />
