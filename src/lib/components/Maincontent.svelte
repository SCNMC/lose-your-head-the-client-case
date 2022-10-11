<script>
	export let mainTitle;
	export let mainText;
	export let mainImage;
</script>

<main>
	<section class="main-content">
		<section class="chapters">
			<section class="beoogde-leerresultaten">
				<a href="#">1.0 Beoogde leerresultaten</a>
				<ul class="list-categories">
					<li>1.1 Humanity-centered digital designers</li>
					<li>1.2 Competenties</li>
					<li>1.3 Werkveld en maatschappij</li>
					<li>1.4 Ontwikkelingen</li>
					<li>1.5 Ambities en dilemma’s</li>
				</ul>
			</section>

			<section class="onderwijsleeromgeving">
				<a href="#">2.0 Onderwijsleeromgeving</a>
				<ul class="2.0-categories">
					<li>2.1 Onderwijsvisie en didactiek</li>
					<li>2.2 Curriculumopbouw</li>
					<li>2.3 Borging onderwijskwaliteit</li>
					<li>2.4 Onderwijs en praktijk</li>
					<li>2.5 Onderwijs en onderzoek</li>
					<li>2.6 Internationalisering</li>
					<li>2.8 Digitale en analoge voorzieningen</li>
					<li>2.9 Ambities en dilemma's</li>
				</ul>
			</section>

			<section class="toetsing">
				<a href="#"> 3.0 Toetsing</a>
				<ul class="3.0-categories">
					<li>3.1 Toetsbeleid en -plan</li>
					<li>3.2 Toetsprogramma en -praktijk</li>
					<li>3.3 Toetsing en feedback</li>
					<li>3.4 Borging en kwaliteit</li>
					<li>3.5 Ambities en dilemma's</li>
				</ul>
			</section>

			<section class="gerealiseerde-leerresultaten">
				<a href="#"> 4.0 Gerealiseerde Leerresultaten</a>
				<ul class="4.0-categories">
					<li>4.1 Afstudeerproces</li>
					<li>4.2 Borging afstudeerniveau vanuit examencommissie</li>
					<li>4.3 Ambities en dilemma's</li>
				</ul>
			</section>
		</section>
	</section>
</main>

<style>
	main {
		background-color: white;
	}

	.main-content {
		margin: 0em 2.5em;
	}

	.chapters {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-top: 1.5em;
		padding-bottom: 2.5em;
		gap: 2em;
	}

	/* section:hover ul.list-categories {
		max-height: inherit;
		opacity: 1;
	} */
	a {
		font-weight: 600;
		font-size: 1.3em;
		/* border-bottom: 4px solid #fff021; */
		padding-bottom: 0.5em;
	}
	li {
		padding-top: 1.5em;
		font-weight: normal;
		list-style: none;
	}
	a::after {
		content: "";
		display: block;
		border-bottom: 4px solid #fff021;
		padding: 0.3em;
		width: 100%;
	}

	/* .list-categories {
		list-style-type: none;
		padding: 0px;
		margin: 0px;
		max-height: 0px;
		opacity: 0;
		overflow: hidden;
		transition: opacity 500ms ease-in-out;
	} */

	@media (min-width: 60em) {
		.main-content {
			margin: 2em 4em 0em;
		}
		.chapters {
			flex-direction: row;
		}
	}
</style>
