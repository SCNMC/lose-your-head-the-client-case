<script>
	export let title;
	export let text;
	export let image;
</script>

<section class="intro">
	<div class="intro-info">
		<h3>Midterm</h3>
		<p
			>De midterm review 2022 willen we graag inzetten om feedback te krijgen op
			ons onderwijs<br /> en met het panel te kijken naar de toekomst van het vakgebied
			en ontwerp-onderwijs. Deze website beschrijft het onderwijs bij CMD Amsterdam,
			onze kritische reflectie hierop en ambities voor de toekomst.</p
		>
		<p
			>CMD Amsterdam is een leergemeenschap waarbij studenten, docenten en
			medewerkers met en van elkaar leren. Deze site is daar ook een voorbeeld
			van: de inhoud is verzorgd door docenten en medewerkers (Diantha
			Kinkhouwers, Laura van der Vlies, David de Vries, Jos Kok, Arif Khan,
			Michel Alders, Tatjana Finke en Zuzana van Polen) en het ontwerp is
			gemaakt door studenten van CMD Agency (Alana Eastman, Ryan Zoeters, Nina
			Rijntjes en Pip Harsveld), de minor Web development (Fabienne van den
			Steen, Kai van Wezel en Nathan Bommezijn) van CMD Amsterdam en Justin Lung
			(AD Frontend Design en Development, HvA) onder begeleiding van Joost Faber
			(docent), alles overzien door onze hoofddocent Irene Kamp.</p
		>
		<p>We kijken uit naar de gesprekken op 4 oktober,</p>
		<p>Andre Neumann - opleidingsmanager</p>
	</div>
	<img src="/assets/cmd-laptop.png" alt="laptop" />
</section>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin: 0.4em 2.5em;
		padding-top: 1em;
		padding-bottom: 2em;
		gap: 2em;
		border-bottom: 4px solid #000;
	}
	h3 {
		font-size: 2.5em;
	}
	p {
		margin-top: 2em;
	}

	@media (min-width: 60em) {
		.intro {
			flex-direction: row;
			align-items: center;
			border-bottom: 4px solid #000;
			margin: 0.4em 4em;
		}

		img {
			height: 15em;
		}

		p {
			letter-spacing: 0.1em;
		}
	}
</style>
