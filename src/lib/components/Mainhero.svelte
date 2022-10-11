<script>
	export let title;
	export let text;
	export let image;
</script>

<section>
	<!-- <img src="/assets/hero-image.jpeg" alt="woman with laptop" /> -->
	<h2>Communication<br /> and Multimedia<br /> Design</h2>
	<img src="/assets/hero-image.jpeg" alt="woman with laptop" />
	<p>Midterm</p>
	<p>Currulicum 2022-2024</p>
</section>

<!-- section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 4px solid #000;
    padding-bottom: 8em;
    margin: 0.4em 2.5em;
}

section :nth-child(3) {
    font-size: 1.1em;
    font-weight: bold;
}

p {
    font-size: 1.1em;
    margin: 0.5em;
    padding: 1em 3em;
    background-color: black;
    color: white;
}
h2 {
    padding-top: 0.2em;
    font-size: 6em;
}

img {
    position: absolute;
    padding: 13em 22em;
    width: 58em;
    height: 23em;
} -->

<!-- h2 {
    font-size: 6em;
    padding: 0.3em;
    padding-left: 0.4em;
}

img {
    position: absolute;
    padding: 13.5em 25em;
    width: 57em;
    height: 23em;
} -->
<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.5em;
		border-bottom: 4px solid #000;
		padding-bottom: 2em;
		margin: 0.4em 2.5em;
	}

	section :nth-child(3) {
		font-size: 1em;
		font-weight: bold;
	}

	p {
		font-size: 1em;
		margin: 0.4em 0.1em;
		padding: 1em 3em;
		background-color: black;
		color: white;
	}
	h2 {
		transition: 0.4s cubic-bezier(0.4, 0.4, 0, 1);
		padding-top: 0.2em;
		font-size: 2.5em;
		z-index: -2;
	}

	img {
		width: 100%;
		height: auto;
		z-index: -1;
	}
	@media (min-width: 40em) {
		h2 {
			font-size: 4em;
		}
	}
	@media (min-width: 60em) {
		section {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			border-bottom: 4px solid #000;
			padding-bottom: 5em;
			margin: 0.4em 4em;
		}

		section :nth-child(3) {
			font-size: 1.1em;
			font-weight: bold;
		}

		p {
			font-size: 1.1em;
			margin: 0.5em;
			padding: 1em 3em;
			background-color: black;
			color: white;
		}

		img {
			position: absolute;
			top: 39%;
			left: 30%;
			width: 65%;
			height: 25em;
		}

		h2 {
			font-size: 6em;
		}
	}
</style>
