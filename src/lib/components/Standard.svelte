<script>
	export let standardTitle;
	export let standardUID;
</script>

<section>
	<a href={standardUID}>{standardTitle}</a>
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		padding-bottom: 2.5em;
	}


	section a {
		font-size: 1.2rem;
		font-weight: bold;
		transition: 0.1s ease-in-out;
		padding-top: 1.5em;
		padding-bottom: 0.5em;
		background: linear-gradient(
				to right,
				rgba(255, 240, 33),
				rgba(255, 240, 33)
			),
			linear-gradient(
				to right,
				rgba(0, 0, 0, 0.5),
				rgba(0, 0, 0, 0.5),
				rgba(0, 0, 0, 0.5)
			);
		background-size: 100% 3px, 0 3px;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 400ms;
	}

	section a:hover {
		background-size: 0 3px, 100% 3px;
	}

	@media (min-width: 60rem) {
		section {
			width: 100%;
		}
	}
</style>
