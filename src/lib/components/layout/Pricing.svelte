<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import IconCheck from "~icons/lucide/check";
	import IconX from "~icons/lucide/x";
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Smarter dispatch. Higher profit.",
		subtitle = "Plans designed for service teams who want AI-powered efficiency—choose the automation level that fits your operation.",
		tierNames = ["Copilot", "Autopilot", "Enterprise"],
		features = [
			{
				name: "AI-powered job & tech assignment",
				tiers: {
					Copilot: true,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "Fully automated board reshuffling",
				tiers: {
					Copilot: false,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "Real-time ServiceTitan integration",
				tiers: {
					Copilot: true,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "Tech/dispatch performance dashboards",
				tiers: {
					Copilot: true,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "Recommended dispatcher-to-tech ratio",
				tiers: {
					Copilot: "Up to 12:1",
					Autopilot: "Up to 25:1",
					Enterprise: "Custom"
				}
			},
			{
				name: "Automated tech/customer alerts",
				tiers: {
					Copilot: true,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "Advanced workflow automations",
				tiers: {
					Copilot: false,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "Custom integration & API access",
				tiers: {
					Copilot: false,
					Autopilot: false,
					Enterprise: true
				}
			},
			{
				name: "Dedicated account manager",
				tiers: {
					Copilot: false,
					Autopilot: false,
					Enterprise: true
				}
			},
			{
				name: "Multi-location/zone board support",
				tiers: {
					Copilot: false,
					Autopilot: "Optional",
					Enterprise: true
				}
			},
			{
				name: "SLA (up-time & service agreements)",
				tiers: {
					Copilot: false,
					Autopilot: "Optional",
					Enterprise: true
				}
			},
			{
				name: "2-day in-person onboarding",
				tiers: {
					Copilot: true,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "CEO-led onboarding support",
				tiers: {
					Copilot: true,
					Autopilot: true,
					Enterprise: true
				}
			},
			{
				name: "Ongoing optimization/strategy calls",
				tiers: {
					Copilot: "2 per week",
					Autopilot: "2 per week",
					Enterprise: "Custom"
				}
			},
			{
				name: "24/7 emergency support (3 min median response)",
				tiers: {
					Copilot: true,
					Autopilot: true,
					Enterprise: true
				}
			}
		],
		tiers = [
		{
			name: "Copilot",
			monthlyPrice: 799,
			yearlyPrice: 799 * 12 * 0.8 / 12, // 20% off for annual
			description: "AI-assisted dispatch for teams who want to stay in control with powerful insight.",
			features: [
				"AI tech/job assignment suggestions",
				"Full tech performance and geographic dashboards",
				"Real-time ServiceTitan integration",
				"Automated tech/customer alerts",
				"2-day on-site onboarding",
				"CEO onboarding support",
				"Two weekly optimization calls",
				"24/7 support (3-min median reply)"
			],
			cta: {
				label: "Start with Copilot",
				href: "/signup?plan=copilot"
			}
		},
		{
			name: "Autopilot",
			monthlyPrice: 1499,
			yearlyPrice: 1499 * 12 * 0.8 / 12, // 20% off for annual
			description: "Full automation and real-time reshuffling for high-efficiency operations.",
			features: [
				"Everything in Copilot",
				"Fully automated board reshuffling",
				"Advanced workflow automations",
				"Up to 25:1 dispatcher to tech ratio",
				"Integrated proactive-care alerts",
				"Live dashboards and call board",
				"Twice-weekly ops strategy calls",
				"CEO-led onboarding & training"
			],
			cta: {
				label: "Upgrade to Autopilot",
				href: "/signup?plan=autopilot"
			},
			highlight: true
		},
		{
			name: "Enterprise",
			monthlyPrice: null,
			yearlyPrice: null,
			description: "Custom automation, workflow, and support for multi-location leaders.",
			features: [
				"Everything in Autopilot",
				"Custom dashboarding & analytics",
				"Multi-location/zone support",
				"Custom workflows/API integrations",
				"Dedicated account manager",
				"Custom SLAs and reporting",
				"Scaled dispatcher training"
			],
			cta: {
				label: "Contact sales",
				href: "/contact"
			}
		}
	]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-gray-100 p-0.5 dark:bg-gray-800">
				<Button
					variant="ghost"
					size="sm"
					class=" {!annual ? 'bg-white shadow-sm dark:bg-gray-700' : ''}"
					onclick={() => (annual = false)}
				>
					Monthly
				</Button>
				<Button
					variant="ghost"
					size="sm"
					rounded
					class={annual ? "bg-white shadow-sm dark:bg-gray-700" : ""}
					onclick={() => (annual = true)}
				>
					Annual <span class="text-primary-600 dark:text-primary-400 text-footnote">Save 20%</span>
				</Button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class="flex flex-col rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 dark:bg-gray-800 dark:ring-gray-700"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary-700={tier.highlight}
				class:translate-y-[-4px]={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 dark:text-white">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 dark:text-white">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3 dark:text-gray-300">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<IconCheck class="text-primary-600 dark:text-primary-400 size-5 flex-shrink-0" />
								<span class="text-body text-emphasis-medium dark:text-gray-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-auto">
					<Button
						href={tier.cta.href}
						variant={tier.highlight ? "primary" : "secondary"}
						class="w-full"
					>
						{tier.cta.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Mobile feature comparison (alternative view for very small screens) -->
		<div>
			<!-- Universal pricing comparison for mobile -->
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<!-- Sticky header with tier names -->
					<thead class="border-border sticky top-0 z-10 border-b">
						<tr>
							<th class="min-w-[120px] py-3 text-left">
								<span class="sr-only">Feature</span>
							</th>
							{#each tierNames as tierName, i}
								<th class="text-caption min-w-[100px] py-3 text-left dark:text-white">
									{tierName}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-border divide-y">
						{#each features as feature}
							<tr>
								<td class="text-body py-3 pr-8 font-medium lg:pr-0 dark:text-white">
									{feature.name}
								</td>
								{#each tierNames as tierName, i}
									<td class="py-3">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<IconCheck class="text-primary-900 dark:text-primary-400 size-5" />
											{:else}
												<IconX class="size-5 text-gray-400" />
											{/if}
										{:else}
											<span class="text-callout font-medium text-gray-700 dark:text-gray-300">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
