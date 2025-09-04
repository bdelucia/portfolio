import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { AnimationToggle } from "@/components/animation-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShineBorder } from "./magicui/shine-border";
import { useTheme } from "next-themes";

export default function Navbar() {
    const theme = useTheme();
    return (
        <div className="pointer-events-none fixed inset-x-0 max-[460px]:top-6 max-[460px]:bottom-auto max-[460px]:origin-top bottom-6 z-30 mx-auto flex origin-bottom h-full max-h-14">
            <div className="fixed max-[460px]:hidden bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
            <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-foreground [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                <ShineBorder
                    shineColor={
                        theme.theme === "light"
                            ? ["#A07CFE", "#FE8FB5", "#FFBE7B"]
                            : "white"
                    }
                    borderWidth={3}
                />
                {DATA.navbar.map((item) => (
                    <DockIcon key={item.href}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({
                                            variant: "ghost",
                                            size: "icon",
                                        }),
                                        "size-12 text-background"
                                    )}
                                >
                                    <item.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full" />
                {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        className={cn(
                                            buttonVariants({
                                                variant: "ghost",
                                                size: "icon",
                                            }),
                                            "size-12 text-background"
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                <Separator orientation="vertical" className="h-full py-2" />
                <DockIcon key="animations">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <AnimationToggle />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Toggle Animations</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
                <DockIcon key="theme">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ModeToggle />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </div>
    );
}
