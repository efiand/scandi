<script>
	import punctify from '@tools/punctify.js';

	export let className = null;
	export let height = null;
	export let width = null;
	export let title = '';
	export let url = '';

	let showFrame = true;

	const errorHandler = () => {
		showFrame = false;
	};
</script>

{#if showFrame}
	<iframe
		class={className}
		src={url}
		{width}
		{height}
		title={punctify(title)}
		loading="lazy"
		on:load
		on:error={errorHandler}
	/>
{/if}
