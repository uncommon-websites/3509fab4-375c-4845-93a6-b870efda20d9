<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
</script>

<Hero
	title="Elevate your business with thoughtful design"
	subtitle="Solutions that enhance user experience, and improve visual communication."
	imageSrc="/sample.png"
	generating
/>
<LogoScroller label="" generating />

<Summary
	title="What we do"
	text="Probook AI uses artificial intelligence to optimize technician assignments for home services companies. Quickly boost sales, eliminate guesswork, and increase efficiency—without changing your current systems."
/>

<Testimonials
	testimonials={[
		{
			name: "Walter Greene",
			position: "Operations Manager",
			company: "Northstar HVAC",
			quote:
				"We shaved two hours off every dispatch shift with Probook. Our techs get out the door faster and we haven’t missed a single high-value call since making the switch.",
			image: "/generated/image-a-middle-aged-man-in-an-hvac-service-off.webp"
		},
		{
			name: "Maria Santiago",
			position: "Lead Dispatcher",
			company: "FlowMaster Plumbing",
			quote:
				"Before Probook, I would double-book jobs at least once a week. Now, our calendar is always accurate. I spend less time fixing errors and more time helping customers.",
			image: "/generated/image-a-woman-in-a-plumbing-company-office-wea.webp"
		},
		{
			name: "Russell Pierson",
			position: "Owner",
			company: "Pierson Sewer Solutions",
			quote:
				"Probook’s board showed me which jobs lose us money. It paid for itself within the first month by keeping our best crews busy and cutting callbacks by 30%.",
			image: "/generated/image-an-older-man-at-a-sewer-services-company.webp"
		}
	]}
/>

<Features
	title="Features that set Probook apart"
	subtitle="The essentials your team needs to streamline dispatching, boost sales, and handle more calls—confidently."
	features={[
		{
			title: "AI-powered technician assignments",
			description: "Assign the right tech to every call based on data, not guesswork." 
		},
		{
			title: "ServiceTitan integration in real time",
			description: "Every call, update, and job syncs instantly—no delays or double entry."
		},
		{
			title: "Copilot and Autopilot automation",
			description: "Choose flexible support or full AI automation and scale to over 20 techs per dispatcher." 
		},
		{
			title: "Dashboards and actionable insights",
			description: "See performance, geography, and trends to drive more revenue every week." 
		},
		{
			title: "Fast onboarding and ongoing support",
			description: "2-day launch, CEO-led training, weekly reviews, and 24/7 help when you need it." 
		},
		{
			title: "Proven results for service companies",
			description: "Customers report 12% higher sales, 19% more flips, and a 20:1 tech-dispatcher ratio." 
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "AI-powered technician dispatch",
			description: "Assign the best tech to every call, boost revenue, and shorten response times automatically—all from one board.",
			image: "/generated/image-a-diverse-group-of-hvac-and-plumbing-dis.webp",
			link: {
				href: "/use-cases/ai-dispatch",
				label: "Learn more"
			}
		},
		{
			title: "Scale teams without extra hires",
			description: "Let one dispatcher manage up to 20+ techs confidently with automated scheduling, escalations, and transparency.",
			image: "/generated/image-a-dispatcher-in-a-modern-office-talking-.webp",
			link: {
				href: "/use-cases/scale-ops",
				label: "Learn more"
			}
		},
		{
			title: "Exceptional customer experiences",
			description: "Proactively notify customers, speed up resolutions, and keep satisfaction high without extra manual work.",
			image: "/generated/image-a-cheerful-interaction-between-a-home-se.webp",
			link: {
				href: "/use-cases/customer-experience",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
  title="See how easy dispatching can be"
  subtitle="Book a free demo and boost your team's revenue and efficiency"
  description="Probook AI helps home service companies send the best technician to every job—automatically. Free up your dispatchers, increase sales, and deliver better service. Ready for smarter dispatching?"
  imageSrc="/generated/image-a-cheerful-home-services-dispatcher-with.webp"
  callsToAction={[{
    href: "/demo",
    label: "Book a demo",
    variant: "primary"
  }]}
/>
