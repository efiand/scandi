import App from '@/components/Page.svelte';

// Особенности статической сборки сайта
if (!window.props.isDev && window.location.host !== 'scandi.pineglade.ru') {
	window.location.host = 'scandi.pineglade.ru';
} else {
	new App({
		hydrate: true,
		props: window.props,
		target: document.body
	});
}
