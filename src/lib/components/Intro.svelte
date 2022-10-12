<script>
	export let introduction;
	export let introductionTitle;

	import * as helpers from "@prismicio/helpers";
</script>

<section class="intro">
	<div class="intro-info">
		<h3>{introductionTitle}</h3>
		<div>
			{@html helpers.asHTML(introduction)}
		</div>
	</div>
	<img src="/assets/cmd-laptop.png" alt="laptop" />
</section>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin: 0.4em 2.5em 2em;
		padding-top: 1em;
		padding-bottom: 1em;
		gap: 2em;
		border-bottom: 4px solid #000;
	}

	h3 {
		font-size: 2.5em;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
	}

	@media (min-width: 60em) {
		.intro {
			flex-direction: row;
			align-items: center;
			border-bottom: 4px solid #000;
			margin: 0.4em 4em;
			padding-bottom: 2em;
		}

		img {
			height: 15em;
		}
	}
</style>
