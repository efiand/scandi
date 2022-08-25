<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { link } from 'svelte-routing';

	export let heading = '';
	export let name = '';
	export let title = '';

	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('route', { path: '/404.html' });
	});
</script>

<svelte:head>
	<title>{name} : {title}</title>
</svelte:head>

<section class="centerer">
	<h2 class="title">{title}</h2>

	<p>{heading}. <a href="/" use:link>Перейти на главную</a></p>
</section>
