<script>
        import Header from "../../lib/components/Header.svelte";
        

</script>

<main>
    <Header></Header>
   <section class="detail">
	 <img src="/assets/hero-image.jpeg" alt="woman with laptop" />
        <section class="detail-header-text">
			<h2>1.0</h2>
			<h3>Beoogde leerresultaten</h3>
		</section>
	
        
       
   </section> 
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
		border-bottom: 4px solid #000;
		padding-bottom: 3em;
		margin: 0.4em 2.5em;
	}
	.detail-header-text {
		z-index: 1;
		border:none;
		padding: 0em;
		margin-left: 0em;
		margin-top: -5em;
	}
	

	
	h2 {
		background-color: #fff021;
		border-top-right-radius: 15px;
		padding: 0.2em;

		font-size: 2.5em;
	}
	h3{
		margin: 0px;
	}

	img {
		z-index: -1;
		width: 100%;
		height: auto;
	}

	@media (min-width: 60em) {
		section {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			border-bottom: 4px solid #000;
			padding-bottom: 6em;
			margin: 0.4em 5em;
		}

		.detail-header-text {
		z-index: 1;
		padding-left: 0em;
		margin-top: -9em;
		margin-left: 3.5em;
		border:none;
	}

				
		img {
			width: 90%;
			object-fit: cover;
			display: flex;
			align-self: center;
			z-index: -1;
  			height: auto;
		}

		h2 {
			background-color: #fff021;
			border-top-right-radius: 15px;
			font-size: 6em;
		}
		h3{
			font-size: 4em;
			margin: 0px
		}
	}

</style>