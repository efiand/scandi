<script>
	export let alias = null;
	export let className = '';
	export let steps = [];
	export let title = '';
</script>

<section class="process {className}" id={alias}>
	<h2 class="process__title title">{title}</h2>

	<ol class="process__list">
		{#each steps as item}
			<li class="process__item">{item}</li>
		{/each}
	</ol>
</section>
