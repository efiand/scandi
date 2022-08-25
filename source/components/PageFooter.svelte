<script>
	import { link } from 'svelte-routing';

	export let className = '';
	export let address = '';
	export let company = '';
	export let companyUrl = '';
	export let phone = '';
	export let phoneNumber = '';
</script>

<footer class="pageFooter {className}">
	<a href="tel:{phoneNumber}">{phone}</a>

	<address class="pageFooter__address">{@html address}</address>

	<a href={companyUrl} use:link>{company}</a>
</footer>
