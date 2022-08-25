<script>
	export let achievements = [];
	export let className = '';
</script>

<div class="achievements {className}">
	<dl class="achievements__list centerer centerer_narrow">
		{#each achievements as { key, value }}
			<div class="achievements__item">
				<dt class="achievements__key">{key}</dt>
				<dd class="achievements__value">{value}</dd>
			</div>
		{/each}
	</dl>
</div>
