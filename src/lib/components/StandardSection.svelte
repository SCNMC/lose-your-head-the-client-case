<section>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		background-color: white;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0em 2.5em;
	}

	@media (min-width: 60rem) {
		div {
			flex-direction: row;
			margin: 2em 4em 0em;
			gap: 2em;
		}
	}

	@media (min-width: 75rem) {
		div {
		}
	}
</style>
