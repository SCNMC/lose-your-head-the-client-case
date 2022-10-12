<script>
	import Header from "$lib/components/Header.svelte";
	import Mainhero from "$lib/components/Mainhero.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Maincontent from "$lib/components/Maincontent.svelte";
	import Footer from "$lib/components/Footer.svelte";

	export let data;
</script>

<Header />
<Mainhero />
<Intro introductionTitle={"Midterm"} introduction={data.page.introduction} />

<Maincontent />
<Footer />
