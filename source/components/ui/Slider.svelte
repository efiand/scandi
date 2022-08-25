<script>
	import { onMount } from 'svelte';

	export let SlideComponent = {};
	export let className = '';
	export let slides = [];

	const HUNDRED = 100;
	let hidden = true;
	let index = 1;

	const prevClickHandler = () => {
		index = index <= 1 ? slides.length : index - 1;
	};

	const nextClickHandler = () => {
		index = index >= slides.length ? 1 : index + 1;
	};

	onMount(() => {
		hidden = slides.length <= 1;
	});
</script>

<div class="slider {className}">
	<div class="slider__wrapper">
		<ul
			class="slider__list"
			style="--slide: translateX(-{HUNDRED * (index - 1)}%)"
		>
			{#each slides as slide}
				<li class="slider__item">
					<svelte:component
						this={SlideComponent}
						className="slider__content"
						{...slide}
					/>
				</li>
			{/each}
		</ul>
	</div>

	<button
		class="slider__nav slider__nav_dir_prev"
		class:slider__nav_hidden={hidden}
		type="button"
		on:click={prevClickHandler}
	>
		<span class="visuallyHidden">Предыдущий слайд.</span>
	</button>
	<button
		class="slider__nav slider__nav_dir_next"
		class:slider__nav_hidden={hidden}
		type="button"
		on:click={nextClickHandler}
	>
		<span class="visuallyHidden">Следующий слайд.</span>
	</button>
</div>
