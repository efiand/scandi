<script>
	import { Route, Router } from 'svelte-routing';
	import IndexPage from '@/components/pages/index.html.svelte';
	import NotFoundPage from '@/components/pages/404.html.svelte';

	export let url = '/';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<header />

<Router {url}>
	<main>
		<Route path="/">
			<IndexPage />
		</Route>

		<Route path="*">
			<NotFoundPage />
		</Route>
	</main>
</Router>

<footer />
