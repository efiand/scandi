<script>
	import Picture from '@/components/ui/Picture.svelte';

	export let alias = '';
	export let cases = '';
	export let className = '';
	export let moreLink = '';
	export let title = '';

	const BIG_TRESHOLD = 488;
</script>

<section class="works {className}" id={alias}>
	<h2 class="works__title title">{title}</h2>

	<ul class="works__list">
		{#each cases as { content, picture, title, url }}
			{@const big = picture.width > BIG_TRESHOLD}
			<li class="works__item" class:works__item_big={big}>
				<Picture className="works__image" {...picture} />

				<a class="works__content" href={url}>
					<h3 class="works__name">{@html title}</h3>
					<p class="works__description">{@html content}</p>
				</a>
			</li>
		{/each}
	</ul>

	<a class="works__more-link" href={moreLink.url}>{moreLink.title}</a>
</section>
