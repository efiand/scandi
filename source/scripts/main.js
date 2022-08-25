import App from '@/components/Page.svelte';

new App({
	hydrate: true,
	props: window.props,
	target: document.body
});
