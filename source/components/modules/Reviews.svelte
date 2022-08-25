<script>
	import Review from '@/components/modules/Review.svelte';
	import Slider from '@/components/ui/Slider.svelte';

	export let alias = null;
	export let className = '';
	export let list = [];
	export let title = '';
</script>

<section class="reviews {className}" id={alias}>
	<h2 class="reviews__title title">{title}</h2>

	<Slider className="reviews__slider" slides={list} SlideComponent={Review} />
</section>
