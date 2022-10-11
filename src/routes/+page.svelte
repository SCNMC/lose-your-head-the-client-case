<script>
	import Header from "$lib/components/Header.svelte";
	import Mainhero from "$lib/components/Mainhero.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Maincontent from "$lib/components/Maincontent.svelte";
	import Footer from "$lib/components/Footer.svelte";

	export let data;
	console.log(data);
</script>

<Header />
<Mainhero />
<Intro introduction={data.document[0].data.introduction} />
<Maincontent />
<Footer />
