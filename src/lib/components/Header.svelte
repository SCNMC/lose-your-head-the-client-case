<script>
	import Animatedhamburger from "./Animatedhamburger.svelte";
	import { fly } from "svelte/transition";

	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>

<header>
	<h1>CMD Mid-term </h1>
	<Animatedhamburger {open} {onClick} />

	{#if open}
		<nav transition:fly={{ y: -200, duration: 400 }}>
			<a href="#">Beoogde leerresultaten</a>
			<a href="#">Onderwijsleeromgeving</a>
			<a href="#">Toetsing</a>
			<a href="#">Gerealiseerde Leerresultaten</a>
		</nav>
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 6em;
		margin: 1em 2.5em;
		position: relative;
		border-bottom: 4px solid #000;
	}

	nav {
		position: fixed;
		display: flex;
		gap: 2em;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #000;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	nav > a {
		font-size: 2em;
		text-decoration: none;
		color: white;
	}

	nav :hover {
		transition: linear 0.2s;
		transform: scale(1.1);
	}

	@media (min-width: 40em) {
		nav {
			position: fixed;
			display: flex;
			gap: 2em;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background-color: #000;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}

		nav > a {
			font-size: 3em;
			text-decoration: none;
			color: white;
		}

		nav :hover {
			transition: linear 0.2s;
			transform: scale(1.1);
		}
	}
</style>
