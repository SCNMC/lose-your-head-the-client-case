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
	}

	section a:hover {
	}

	@media (min-width: 60rem) {
		section {
			width: 100%;
		}
	}
</style>
