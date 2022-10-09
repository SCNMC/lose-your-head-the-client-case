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

			<section class="toetsing">
				<a href="#">2.0 Onderwijsleeromgeving</a>
				<span />
			</section>

			<section class="toetsing">
				<a href="#"> 3.0 Toetsing</a>
				<span />
			</section>

			<section class="gerealiseerde-leerresultaten">
				<a href="#"> 4.0 Gerealiseerde Leerresultaten</a>
				<span />
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
		gap: 3em;
	}

	section:hover ul.list-categories {
		max-height: inherit;
		opacity: 1;
	}
	a {
		font-weight: 600;
		font-size: 1.3em;
		border-bottom: 4px solid #fff021;
		padding-bottom: 0.5em;
	}
	li {
		padding-top: 1.5em;
		font-weight: normal;
	}

	span {
		border-bottom: 4px solid #000;
	}

	.list-categories {
		list-style-type: none;
		padding: 0px;
		margin: 0px;
		max-height: 0px;
		opacity: 0;
		overflow: hidden;
		transition: opacity 300ms ease;
	}
</style>
