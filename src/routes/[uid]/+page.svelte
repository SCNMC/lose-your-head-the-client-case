<script>
    import Header from "$lib/components/Header.svelte";
	import ChapterSection from "$lib/components/DetailComponents/ChapterSection.svelte";
	import ChapterContentleft from "$lib/components/DetailComponents/ChapterContentleft.svelte";
	import ChapterContentright from "$lib/components/DetailComponents/ChapterContentright.svelte";
	import StandardHero from "$lib/components/DetailComponents/StandardHero.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Backtotop from "../../lib/components/Backtotop.svelte";


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
			<ChapterContentleft contentLeft={chapter.data.contentleft} />
			<ChapterContentright contentRight={chapter.data.contentright} />
		</ChapterSection>
	{/each}
	<Footer/>
	<Backtotop/>
