<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script defer src="https://umami.dour.com/script.js" data-website-id="ce2d31dc-6799-4ddf-a254-4026dfa2b821"></script>
</svelte:head>

{@render children()}
