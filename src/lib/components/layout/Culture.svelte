<script lang="ts">
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import { animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Types
	export type Value = {
		title: string;
		description: string;
	};

	// Props
	const { values = [
  {
    title: "Real-world impact over hype",
    description: "We solve actual problems for dispatchers and techs on the ground—making day-to-day operations smoother and more profitable, not just impressive on paper."
  },
  {
    title: "Collaboration at every level",
    description: "AI engineers partner directly with trades veterans to build solutions that work in the field, not just the lab. We share wins and own results together."
  },
  {
    title: "Move fast. Learn faster.",
    description: "Rapid iteration, constant feedback, and a bias for action mean we improve our product every week, guided by customers not just competitors."
  },
  {
    title: "Authenticity and transparency",
    description: "We’re honest about what works, take pride in clear communication, and welcome feedback from every member of our team and every company we support."
  },
  {
    title: "Inclusion fuels innovation",
    description: "We believe diverse voices and backgrounds make us smarter and our results stronger. Every team member has a seat at the table."
  }
]: { values: Value[] } = $props();

	let cards: HTMLElement[] = $state([]);

	onMount(() => {
		if (!cards.length) return;
		animate(
			cards,
			{
				y: ["1.5rem", 0],
				filter: ["blur(2px)", "blur(0px)"],
				opacity: [0, 1]
			},
			{
				duration: 0.3,
				ease: "easeOut",
				delay: stagger(0.1, {
					ease: "easeInOut"
				})
			}
		);
	});
</script>

<section class="bg-white dark:bg-gray-950">
	<div
		class="section-py section-px container mx-auto grid gap-8 [--gap:--spacing(8)] [--radius:var(--radius-2xl)]"
	>
		<SectionHeader title="Our culture." subtitle="The values that guide everything we do" />

		<div
			class="grid gap-(--gap)"
			style:grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
		>
			{#each values as value, i}
				<div
					bind:this={cards[i]}
					class="relative border-t border-gray-200 pt-4 dark:border-gray-900"
				>
					<!-- Content -->
					<div class="text-caption z-10">
						<div>
							<div class="text-headline mb-[1em]">{value.title}</div>
							<div class="text-body text-gray-500 dark:text-gray-400">{value.description}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
