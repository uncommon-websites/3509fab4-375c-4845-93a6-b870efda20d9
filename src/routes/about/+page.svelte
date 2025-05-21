<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Innovation",
			description: "Constantly challenging the status quo to create better solutions."
		},
		{
			title: "Integrity",
			description: "Building trust through transparent actions and honest communication."
		},
		{
			title: "Impact",
			description: "Measuring our success by the positive change we create for our clients."
		}
	];
</script>

<SecondaryHero
  title="AI dispatching. Built by dispatchers."
  subtitle="Predictably put the right tech on every job—and make more on every call."
  imageSrc="/mockups/airport-screen-1747866909261.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Probook AI started with one goal: make dispatching easier, smarter, and fair for every home services team. Our founder worked firsthand as a dispatcher and saw how tough it was to juggle calls, tech schedules, and emergencies—sometimes all at once. Tired of guesswork and stress, we set out to build something better, using data and real-world experience.",
		"We built Probook to remove the subjectivity from dispatching. Now, our AI-powered platform analyzes every job, tech, and route in real time, giving dispatchers the confidence that each call gets the right tech. This means more revenue, less drive time, and a better experience for your team and customers.",
		"Today, leading companies trust Probook to run their boards. We help businesses boost sales, scale efficiently, and keep dispatchers and techs happy with a support team they can always rely on. We’re proud to serve the people who keep homes running—and to help them do it faster, with less stress and just a bit more certainty."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our founder."
	subtitle="Real-world dispatch experience, dedicated to your success."
	stakeholders={[
		{
			name: "George Eliadis",
			position: "Founder & CEO",
			bio: "George brings years of hands-on dispatch experience and a commitment to empowering teams with AI-driven tools. He’s passionate about customer success and is personally involved in every launch.",
			image: "/generated/image-a-professional-headshot-of-a-warm-approa.webp"
		},
	]}
/>

<!-- No investors to display -->

<!-- CTA Section -->
<CallToAction
  title="Build real solutions for real teams"
  subtitle="Join Probook or partner with us"
  description="We’re on a mission to make tech a true force multiplier for home services—the trades that keep our world running. Work alongside AI experts, industry veterans, and a team that cares as much about our customers as our code. Ready to apply your talents where they have impact?"
  imageSrc="/generated/image-a-diverse-group-of-engineers-and-trades-.webp"
  callsToAction={[
    { href: "/careers", label: "Apply to join", variant: "primary" },
    { href: "/contact", label: "Start a conversation", variant: "secondary" }
  ]}
/>
