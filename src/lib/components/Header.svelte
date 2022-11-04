<script>
	import Animatedhamburger from "./Animatedhamburger.svelte";
	import { fly } from "svelte/transition";

	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>

<header>
	<a href="/"><h1>CMD Mid-term </h1></a>
	<Animatedhamburger {open} {onClick} />

	{#if open}
		<nav transition:fly={{ y: -200, duration: 400 }}>
			<a transition:fly={{y:-1000, duration:1100}} href="./beoogde-leerresultaten">1.0 Beoogde leerresultaten</a>
			<a transition:fly={{y:-800, duration:1100}} href="./onderwijsleeromgeving">2.0 Onderwijsleeromgeving</a>
			<a transition:fly={{y:- 600, duration:1100}}  href="./toetsing">3.0 Toetsing</a>
			<a transition:fly={{y:-400, duration:1100}}  href="./gerealiseerde-leerresultaten"
				>4.0 Gerealiseerde Leerresultaten</a
			>
		</nav>
	{/if}
</header>

<style>
	h1 {
		font-size: 1.5em;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0.4em 2.5em;
		position: relative;
		border-bottom: 4px solid #000;
		transition: linear 0.4s;
		z-index: 2;
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
		font-size: 1.5em;
		text-decoration: none;
		color: white;
		transition: all 0.2s ease-in-out;
	}

	nav :hover {
		box-shadow: inset 17em 0 0 0 #fff021;
		transition: inset 6s;
		color: black;
	}

	@media (min-width: 60em) {
		header {
			transition: linear 0.4s;
			margin: 0.4em 4em;
		}
		nav {
			position: fixed;
			display: flex;
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
