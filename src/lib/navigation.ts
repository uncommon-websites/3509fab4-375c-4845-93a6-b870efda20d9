/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "AI-powered technician dispatch",
				href: "/use-cases/ai-dispatch",
				image: "/generated/image-a-diverse-group-of-hvac-and-plumbing-dis.webp",
				description: "Assign the best tech to every call, boost revenue, and shorten response times automatically—all from one board.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Scale teams without extra hires",
				href: "/use-cases/scale-ops",
				image: "/generated/image-a-dispatcher-in-a-modern-office-talking-.webp",
				description: "Let one dispatcher manage up to 20+ techs confidently with automated scheduling, escalations, and transparency.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Exceptional customer experiences",
				href: "/use-cases/customer-experience",
				image: "/generated/image-a-cheerful-interaction-between-a-home-se.webp",
				description: "Proactively notify customers, speed up resolutions, and keep satisfaction high without extra manual work.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
