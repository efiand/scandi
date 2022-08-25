<script>
	import Achievements from '@/components/modules/Achievements.svelte';
	import Picture from '@/components/ui/Picture.svelte';

	export let achievements = {};
	export let alias = null;
	export let content = '';
	export let picture = {};
	export let title = '';
</script>

<section class="about" id={alias}>
	<h2 class="about__title title centerer">{title}</h2>

	<div class="about__body centerer centerer_narrow">
		<Picture {...picture} />

		<div class="about__content content">{@html content}</div>
	</div>

	<Achievements className="about__achievements" {achievements} />
</section>
