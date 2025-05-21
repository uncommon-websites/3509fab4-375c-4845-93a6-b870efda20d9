<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Jose Gutierrez",
      position: "Dispatcher",
      company: "Blue Pipe Plumbing",
      quote:
        "Probook AI paid for itself in the first month. I went from being overwhelmed every morning to having total control. Our canceled jobs dropped by half.",
      image: "/generated/image-professional-headshot-of-jose-gutierrez-.webp"
    },
    {
      name: "Latasha Williams",
      position: "Operations Manager",
      company: "Pure Comfort HVAC",
      quote:
        "The ROI was immediate — our revenue is up 15% and my team loves how easy it is. Training our newer dispatchers took hours instead of weeks.",
      image: "/generated/image-professional-headshot-of-latasha-william.webp"
    },
    {
      name: "Dmitri Antonov",
      position: "Owner",
      company: "BrightCurrent Electric",
      quote:
        "I was worried about the price until I saw the results. My dispatchers are less stressed and we’re closing more jobs without hiring extra staff. Worth every penny.",
      image: "/generated/image-professional-headshot-of-dmitri-antonov-.webp"
    }
  ]}
/>

<CallToAction
  title="Smarter dispatching, higher revenue"
  subtitle="See how top teams use Probook to drive more sales and happier technicians."
  description="Ready to leave gut-feel dispatching behind? With Probook AI, you can assign the right tech for every job in secondsand watch your revenue climb. Start with a risk-free demo, enjoy full onboarding support from our team, and experience why our customers never look back."
  imageSrc="/generated/image-a-cheerful-hvac-technician-in-an-office-.webp"
  callsToAction={[
    { href: '/book-demo', label: 'Book a demo', variant: 'primary' },
    { href: '/contact', label: 'Talk to us', variant: 'secondary' }
  ]}
/>

