<script>
	export let className = '';
	export let description = '';
	export let slogan = '';
	export let ticketLink = {};
</script>

<div class="promo {className}">
	<b class="promo__slogan">{slogan}</b>

	<p class="promo__description">{@html description}</p>

	<a class="promo__button button" href="#{ticketLink.alias}">
		{ticketLink.title}
	</a>
</div>
