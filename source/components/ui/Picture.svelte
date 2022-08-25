<script>
	import punctify from '@tools/punctify.js';

	export let alt = '';
	export let className = null;
	export let height = null;
	export let images = [];
	export let webpImages = [];
	export let width = null;

	const RETINA_START = 2;

	const getSrcset = (list, start = 1) =>
		list.map(({ url, density }, i) => {
			if (start <= i + 1) {
				return `${url} ${density}x`;
			}
			return '';
		});

	let [firstImage = {}] = images;
	let { url = null } = firstImage;
	let srcset = images.length > 1 ? getSrcset(images, RETINA_START) : null;
</script>

<picture class={className}>
	{#if webpImages.length}
		<source type="image/webp" srcset={getSrcset(webpImages)} />
	{/if}
	<img src={url} {srcset} {width} {height} alt={punctify(alt)} loading="lazy" />
</picture>
