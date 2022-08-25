<script>
	import Frame from '@/components/ui/Frame.svelte';
	import wait from '@tools/wait.js';

	export let className = '';
	export let address = '';
	export let alias = null;
	export let title = '';
	export let frame = {};

	const TIMEOUT = 2000;
	let mapLoaded = false;
	let frameLoaded = false;

	const loadHandler = async () => {
		frameLoaded = true;
		await wait(TIMEOUT);
		mapLoaded = true;
	};
</script>

<section class="map {className}" class:map_loaded={mapLoaded} id={alias}>
	<h2 class="visuallyHidden">{title}</h2>
	<p class="visuallyHidden">{@html address}</p>

	<Frame
		className="map__frame {frameLoaded ? 'map__frame_loaded' : ''}"
		{...frame}
		on:load={loadHandler}
	/>
</section>
