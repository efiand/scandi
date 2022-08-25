<script>
	import Picture from '@/components/ui/Picture.svelte';
	import Promo from '@/components/modules/Promo.svelte';
	import { link } from 'svelte-routing';
	import { onMount } from 'svelte';

	export let className = '';
	export let contacts = {};
	export let logo = {};
	export let nav = [];
	export let promoData = null;
	export let url = '/';

	let isIndex = url === '/';
	let opened = false;
	let fixed = false;

	const clickHandler = (evt) => {
		evt.preventDefault();

		opened = !opened;
	};

	const checkFixable = () => {
		fixed = window.scrollY >= window.innerHeight;
	};

	onMount(checkFixable);

	$: isIndex = url === '/';
</script>

<svelte:window on:scroll={checkFixable} />

<header
	class="pageHeader {className}"
	class:pageHeader_promo={promoData}
	class:pageHeader_opened={opened}
>
	<div class="pageHeader__top centerer" class:pageHeader__top_fixed={fixed}>
		<a
			class="pageHeader__logo"
			href={isIndex ? null : '/'}
			aria-current={isIndex ? 'page' : null}
			use:link
		>
			<Picture className="pageHeader__logo" {...logo} />
		</a>

		<nav class="pageHeader__nav" id="navigation">
			<ul class="pageHeader__nav-list">
				{#each nav as { alias, title }}
					<li class="pageHeader__nav-item">
						<a class="pageHeader__link" href="{isIndex ? '' : '/'}#{alias}">
							{title}
						</a>
					</li>
				{/each}
			</ul>

			<button
				class="pageHeader__toggler"
				type="button"
				aria-controls="navigation"
				aria-expanded="false"
				on:click={clickHandler}
			>
				<span class="visuallyHidden">Показать / скрыть меню.</span>
			</button>
		</nav>

		<a
			class="pageHeader__link pageHeader__linktel"
			href="tel:{contacts.phoneNumber}"
		>
			{contacts.phone}
		</a>
	</div>

	{#if promoData}
		<div class="pageHeader__bottom centerer centerer_narrow">
			<Promo className="pageHeader__promo" {...promoData} />
		</div>
	{/if}
</header>
