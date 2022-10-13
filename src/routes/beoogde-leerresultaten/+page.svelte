<script>
        import Header from "$lib/components/Header.svelte";
		import Footer from "$lib/components/Footer.svelte"
		import * as prismicH from '@prismicio/helpers';

		export let data;
		export let standards;
		export let chapters;
		export let page;   
</script>

<main>
    <Header></Header>
   <section class="detail">
	 <img class="detail-hero-img" src="/assets/hero-image.jpeg" alt="woman with laptop" />
        <section class="detail-hero-heading">
			<h2>{data.standards[0].standardnumber}.0</h2>
		
			<h3>{data.standards[0].title}</h3>
			
		</section>
		
	</section>
<p class="detail-hero-p">{@html prismicH.asHTML(data.standards[0].introduction)}</p>
<section class="main-text">

	{#each standards.data.chapters as chapter}
		<section class="text">
		<div>
			<h4>${data.chapter.title.data}</h4> 
		</div>
		
		<h5>Humanity-centred ontwerpers van digitale, interactieve producten</h5>	
		<section class="text-content">
		<p>
			CMD Amsterdam leidt studenten op tot (junior) Humanity-centred ontwerpers van digitale, interactieve producten  (zie ook: visie CMD Amsterdam). Iedere student krijgt een stevige basis van techniek, interactie-ontwerp en vormgeving. Daarnaast brengen ze de context in kaart en kunnen ze ontwerpuitdagingen bevragen en helder verwoorden. Tijdens het ontwerpproces staat de mens en de samenleving centraal. Afhankelijk van interesse en ambitie verbreden of verdiepen studenten deze basiskennis en -vaardigheden. 
			Afbeelding: 1.1 de basis van het CMD Amsterdam curriculum
		</p>
		<img src="/assets/cmd-laptop.png" alt="laptop" />
		</section>
		
	</section>
	{/each}  
        
       
   </section> 
</main>
<Footer></Footer>

<style>
/* hero */
/* mobile viewport */
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
		border-bottom: 4px solid #000;
		margin: 1.5em 2.5em;
	}
	.detail-hero-heading {
		z-index: 1;
		border:none;
		padding: 0em;
		margin-left: 0em;
		margin-top: -5em;
	}
	

	
	.detail-hero-heading > h2 {
		background-color: #fff021;
		border-top-right-radius: 15px;
		padding: 0.2em;

		font-size: 2.5em;
	}
	.detail-hero-heading > h3{
		margin: 0px;
	}

	.detail-hero-img {
		z-index: -1;
		width: 100%;
		height: auto;
	}

	/* text left */

	.main-text{
			margin: 0px;
			padding:0px;
			background-color: #F5F5F5;
		}

	.text-content {
		margin: 1em 0em;
		padding:0px;
		display: flex;
		flex-direction: row;
		gap: 5em;
		border: none;
		
	}

	.text > h5{
			font-size: 1.2em;
		}

		div {
			background-color:#fff021;
			width: 2.5em;
			height: 2.5em;
  			border-radius: 50%;
		}

		div > h4{
			font-size: 1.2em;
			text-align: center;
			padding: auto;
			margin: 0.4em;
		}

/* desktop viewport */
	@media (min-width: 60em) {
		section {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			border-bottom: 4px solid #000;
	
			margin: 4em 5em;
		}
		/* hero */
		.detail{
			margin-bottom: 0.5em;
		}

		.detail-hero-heading {
		z-index: 1;
		padding-left: 0em;
		margin-top: -9em;
		margin-left: .5em;
		margin-bottom: 0.5em;
		border:none;
	}

				
		.detail-hero-img {
			width: 90%;
			object-fit: cover;
			display: flex;
			align-self: center;
			z-index: -1;
  			height: auto;
		}

		.detail-hero-heading > h2 {
			background-color: #fff021;
			border-top-right-radius: 15px;
			font-size: 6em;
		}
		.detail-hero-heading > h3{
			font-size: 4em;
			margin: 0px
		}
		.detail-hero-p{
		margin-top: 0px;
		margin: 2em 5em;
		}

		/* text-left */
		.main-text{
			margin: 0px;
			padding:0px;
			background-color: #F5F5F5;
		}

		.text{
			
			margin: 4em 5em;
		}

		.text-content {
			margin: 1em 0em;
			padding:0px;
			display: flex;
			flex-direction: row;
			gap: 5em;
			border: none;
			
		}

		 .text > h5{
			font-size: 1.2em;
		}

		div {
			background-color:#fff021;
			width: 2.5em;
			height: 2.5em;
  			border-radius: 50%;
		}

		div > h4{
			font-size: 1.2em;
			text-align: center;
			padding: auto;
			margin: 0.4em;
		}
	}

</style>