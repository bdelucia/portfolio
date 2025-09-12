import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Robert DeLucia",
    nicknames: ["Bobby", "Bobbeh", "Bobert"],
    initials: "RD",
    url: "https://dillion.io",
    location: "Glendale, AZ",
    locationLink: "https://www.google.com/maps/place/glendaleaz",
    description: "though people call me:",
    summarySections: [
        {
            title: "Early Tech Journey",
            content:
                "My passion for computers started early: playing Reader Rabbit in 1st grade, building my first desktop at 13 with money from cleaning windows, and exploring content creation with my first [website](https://ultimateminecraftblog.weebly.com/index.html) and YouTube channels. Throughout school, I tinkered with programming: Lego Mindstorms robots in 5th grade, HTML/CSS websites in 10th grade, and even Scheme programs in 12th grade.",
        },
        {
            title: "College & Linux Discovery",
            content:
                "At ASU (#1 in innovation baby), I explored data science, astrophysics, and game development. Everything changed when I joined the Linux Users Group. I was blown away by the cutting-edge technologies other members were working on: Next.js SaaS apps for hackathons, Neovim, Arch Linux ricing contests, and more. Check out my personal Arch Linux config [here](https://dub.sh/bobbeh-arch-rice).",
        },
        {
            title: "Adventures in Phoenix/Tempe",
            content:
                "Living in Downtown Phoenix, I discovered new hobbies like skateboarding (though I wasn't great at it... I broke my wrist on my way back from Calculus 3, which was honestly less painful than that class). I tried an e-skateboard but was underwhelmed, then discovered electric unicycles when I moved to Tempe. I joined a massive group that goes on rides around Tempe and bought my first one in fall 2023.",
        },
        {
            title: "Beyond Coding",
            content:
                "I enjoy cooking as much as eating.I make a mean chicken parmesan [(check out my blog post about it)](/blog/bobbehs-chicken-parmesan). Thanks for reading a little bit about me!",
        },
    ],
    avatarUrl: "/me.jpg",
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
        {
            href: "https://www.bobwithablog.dev/",
            icon: NotebookIcon,
            label: "Blog",
        },
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
            title: "Raspberry Pi Minecraft Server",
            href: "https://dub.sh/bobbeh-mc-server",
            dates: "January 2025 - Present",
            active: true,
            description:
                "A private PaperMC server running on a Raspberry Pi that I use to play Minecraft with my friend. I wrote bash scripts to automatically restart the server when it crashes and to backup the world every week.",
            technologies: [
                "Raspberry Pi",
                "Debian OS",
                "DNS Configuration",
                "Bash Scripts",
            ],
            links: [
                {
                    type: "3D map (may take a while to load)",
                    href: "https://dub.sh/bobbeh-mc-server",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://pub-22e36f870e1647a6a48e07c2fa9d9ae8.r2.dev/server.png",
            video: "",
        },
    ],
} as const;
