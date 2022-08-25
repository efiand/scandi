<script>
	import Picture from '@/components/ui/Picture.svelte';

	export let alias = null;
	export let className = '';
	export let people = [];
	export let title = '';
</script>

<section class="team {className}" id={alias}>
	<h2 class="team__title title">{title}</h2>

	<ul class="team__list">
		{#each people as { content, name, photo }}
			<li class="team__item">
				<h2 class="visuallyHidden">{name}</h2>

				<Picture className="team__image" {...photo} />

				<p class="team__description">{@html content}</p>
			</li>
		{/each}
	</ul>
</section>
