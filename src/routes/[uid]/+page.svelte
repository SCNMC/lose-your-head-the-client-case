<script>
    import Header from "$lib/components/Header.svelte";
	import ChapterSection from "$lib/components/DetailComponents/ChapterSection.svelte";
	import ChapterContentLeft from "$lib/components/DetailComponents/ChapterContentLeft.svelte";
	import ChapterContentRight from "$lib/components/DetailComponents/ChapterContentRight.svelte";
	import StandardHero from "$lib/components/DetailComponents/StandardHero.svelte";


	export let data;
</script>

<Header />
<StandardHero
        standardHeaderTitle={data.standard.data.title}
		standardHeaderIntroduction={data.standard.data.introduction}
		standardNumber={data.standard.data.standardnumber}
/> 

{#each data.standard.data.chapters as chapter, i}
		<ChapterSection
			chapterTitle={chapter.data.title}
			chapterNumber={`${data.standard.data.standardnumber}.${i + 1}`}
			chapterUID={chapter.uid}
		>
			<ChapterContentLeft contentLeft={chapter.data.contentleft} />
			<ChapterContentRight contentRight={chapter.data.contentright} />
		</ChapterSection>
	{/each}
