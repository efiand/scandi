<script>
	import Form from '@/components/ui/Form.svelte';

	export let alias = null;
	export let className = '';
	export let content = '';
	export let form = '';
	export let title = '';
</script>

<section class="ticket {className}" id={alias}>
	<h2 class="ticket__title title">{title}</h2>

	<p class="ticket__content">{@html content}</p>

	<Form className="ticket__form" {...form} />
</section>
