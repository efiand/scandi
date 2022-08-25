<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import About from '@/components/modules/About.svelte';
	import Map from '@/components/ui/Map.svelte';
	import Process from '@/components/modules/Process.svelte';
	import Reviews from '@/components/modules/Reviews.svelte';
	import Team from '@/components/modules/Team.svelte';
	import Ticket from '@/components/modules/Ticket.svelte';
	import Works from '@/components/modules/Works.svelte';

	export let sections = [];

	let [about, works, team, process, reviews, ticket, map] = sections;

	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('route', { path: '/' });
	});
</script>

<About {...about} />
<Works className="centerer" {...works} />

<div class="sections">
	<Team className="centerer centerer_narrow" {...team} />
	<Process className="centerer" {...process} />
</div>

<Reviews className="centerer centerer_narrow" {...reviews} />

<div class="group">
	<div class="group__container centerer">
		<Ticket className="group__ticket" {...ticket} />
		<Map className="group__map" {...map} />
	</div>
</div>
