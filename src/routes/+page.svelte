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
	generating
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Streamlined Workflows",
			description:
				"Automate repetitive tasks and connect systems to improve productivity with our industry-leading 87% time savings.",
			image:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
			link: {
				href: "/use-cases/workflows",
				label: "Learn more"
			}
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors.",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2488&q=80",
			link: {
				href: "/use-cases/data-analysis",
				label: "Explore analytics"
			}
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption.",
			image:
				"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
			link: {
				href: "/use-cases/collaboration",
				label: "See security features"
			}
		}
	]}
/>

<AboutTeaser generating />
<CallToAction generating />
