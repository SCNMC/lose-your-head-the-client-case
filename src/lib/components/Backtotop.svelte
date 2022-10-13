<script>
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>Back to top</div>

<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
        padding: 1em .5em;
        border-radius: .5em;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: #fff021;
		background-color: black;
        font-weight: bold;
	}

    .back-to-top:hover{
        cursor: pointer;
    }

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
