<script>
	import { Route, Router } from 'svelte-routing';
	import IndexPage from '@/components/pages/index.html.svelte';
	import NotFoundPage from '@/components/pages/404.html.svelte';
	import PageFooter from '@/components/PageFooter.svelte';
	import PageHeader from '@/components/PageHeader.svelte';

	export let name = '';
	export let project = {};
	export let pages = {};
	export let url = '/';

	let promoData = null;

	const routeHandler = ({ detail }) => {
		url = detail.path;
	};

	$: {
		promoData = pages[url].promo;
	}
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<Router {url}>
	<PageHeader className="page__header" {...project} {promoData} {url} />

	<main class="page__main">
		<h1 class="visuallyHidden">{name}</h1>

		<Route path="/">
			<IndexPage {...pages['/']} {...project} on:route={routeHandler} />
		</Route>

		<Route path="*">
			<NotFoundPage
				{...pages['/404.html']}
				{...project}
				{name}
				on:route={routeHandler}
			/>
		</Route>
	</main>

	<PageFooter className="page__footer centerer" {...project.contacts} />
</Router>
