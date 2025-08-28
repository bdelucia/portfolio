import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Robert DeLucia",
    initials: "RD",
    url: "https://dillion.io",
    location: "Glendale, AZ",
    locationLink: "https://www.google.com/maps/place/glendaleaz",
    description:
        "Recent B.S. Computer Science graduate from Arizona State University. I love building websites everyone can use.",
    summary:
        "I’ve grown from playing Reader Rabbit in 1st grade to building my first computer at 13, and now to developing full-stack applications from the ground up. I explored a lot of routes in my time at ASU, such as data science and astrophysics, but I'm now focusing on building full-stack applications and websites. I have a soft spot for game development, I have made a few games in my time at ASU, with IDEs like Unity and GameMaker Studio. I also make a mean chicken parmesan [(check out my blog post about it)](/blog/bobbehs-chicken-parmesan). I use Arch btw",
    avatarUrl: "/me.png",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "Python",
        "Postgres",
        "MS SQL Server",
        "Docker",
        "Java",
        "C++",
        "C#",
        "ASP.NET",
        "Excel",
        "Tableau",
        "Linux",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "bdelucia@asu.edu",
        tel: "+1 623-282-5327",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://dub.sh/bobbeh-github",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://dub.sh/bobbeh-linkedin",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://dub.sh/bobbeh-twitter",
                icon: Icons.x,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,

                navbar: false,
            },
        },
    },

    work: [
        {
            company: "One Call",
            href: "https://onecallcm.com/",
            badges: [],
            location: "Remote",
            title: "IT Intern",
            logoUrl: "/onecall.png",
            start: "May 2025",
            end: "August 2025",
            description:
                "Helped improve an internal communications dashboard to display more information about payors and their associated branches. Wrote stored procedures in SSMS and displayed the returned information using ASP.NET and C#.",
        },
        {
            company: "Outlier",
            badges: [],
            href: "https://outlier.ai/",
            location: "Remote",
            title: "LLM Response Evaluator",
            logoUrl: "/outlier.png",
            start: "April 2024",
            end: "August 2024",
            description:
                "Analyzed and compared response pairs from various companies' LLMs given a prompt and evaluated what response was better in the context of the LLM. Detailed feedback comparing 500+ responses to refine LLM output for more coherence/relevance.",
        },
        {
            company: "Top Shelf",
            href: "https://dub.sh/bobbeh-rickroll",
            badges: [],
            location: "Peoria, AZ",
            title: "Server Assistant",
            logoUrl: "/topshelf.png",
            start: "December 2018",
            end: "May 2025",
            description:
                "Demonstrated exceptional efficiency during peak volume periods; served over 200 customers daily by restocking both bar and restaurant items, ensuring seamless operations, and meeting customer demands to enhance overall dining experience.",
        },
    ],
    education: [
        {
            school: "Arizona State University",
            href: "https://www.asu.edu/",
            degree: "Bachelor of Science, Computer Science (BS)",
            logoUrl: "/asu.png",
            start: "2020",
            end: "2025",
        },
    ],
    projects: [
        {
            title: "Jobs by Bob",
            href: "https://dub.sh/bobbeh-jobs",
            dates: "July 2025 - August 2025",
            active: true,
            description:
                "To learn Next.js, I built this job board website that allows users to post job listings. It uses Clerk to manage authentication as well as subscription plans and permissions. I used Inngest to make AI Agents to summarize resumes, rank applicants and send out automated emails.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Drizzle",
                "TailwindCSS",
                "Clerk",
                "Inngest",
                "Shadcn UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://dub.sh/bobbeh-jobs",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://dub.sh/bobbeh-jobs-source",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://pub-dba825f56b6b4d059461fd476f2fdf10.r2.dev/jobsbybob.mp4",
        },
        {
            title: "The Bob Shop",
            href: "https://odin-shopping-cart-weld.vercel.app/",
            dates: "June 2025 - July 2025",
            active: true,
            description:
                "Frontend-focused, SPA made with React, TypeScript and DaisyUI components.",
            technologies: [
                "React",
                "Typescript",
                "DaisyUI",
                "TailwindCSS",
                "Framer Motion",
                "Vite",
                "Vercel",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://odin-shopping-cart-weld.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://dub.sh/bobbeh-shopping-source",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://pub-dba825f56b6b4d059461fd476f2fdf10.r2.dev/bobshop.mp4",
        },
        {
            title: "Psyche Salvage",
            href: "https://dub.sh/bobbeh-psyche",
            dates: "August 2024 - May 2025",
            active: true,
            description:
                "Developed an educational game about the NASA-ASU Psyche mission with roguelite gameplay. Created with the Unity engine. My senior year capstone project.",
            technologies: ["Unity", "WebGL", "C#"],
            links: [
                {
                    type: "Website",
                    href: "https://dub.sh/bobbeh-psyche",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Play it now!",
                    href: "https://missiontopsyche-iridium.github.io/iridium_21b_web_game-asu/",
                    icon: <Icons.game className="size-4" />,
                },
            ],
            image: "",
            video: "https://pub-dba825f56b6b4d059461fd476f2fdf10.r2.dev/psyche.mp4",
        },
        {
            title: "Memory Game",
            href: "https://odin-memory-game-ten.vercel.app/",
            dates: "May 2025 - May 2025",
            active: true,
            description:
                "A simple React memory card game that uses the PokeAPI. Made during my beginning days learning React.",
            technologies: [
                "React",
                "JavaScript",
                "DaisyUI",
                "react-card-flip",
                "Vercel",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://odin-memory-game-ten.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://dub.sh/bobbeh-memory-source",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://pub-dba825f56b6b4d059461fd476f2fdf10.r2.dev/memorygame.mp4",
        },
    ],
} as const;
