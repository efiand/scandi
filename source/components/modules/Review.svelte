<script>
	import Picture from '@/components/ui/Picture.svelte';

	export let className = '';
	export let content = '';
	export let images = [];
	export let name = '';
</script>

<div class="review {className}">
	<blockquote class="review__quote content">
		{@html content}

		<cite class="review__author">{name}</cite>
	</blockquote>

	<ul class="review__photos">
		{#each images as picture}
			<li class="review__photo">
				<Picture className="review__image" {...picture} />
			</li>
		{/each}
	</ul>
</div>
