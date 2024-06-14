"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import {navigationItems} from "@/data";


export function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
            <div className="col-span-6 flex md:col-span-3">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">
                        Adarsh <span className="text-blue-500">G S</span>
                    </h1>
                </Link>
            </div>

            <div className="hidden md:flex justify-center items-center col-span-6">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigationItems.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <Link href={item.href} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        active={pathname === item.href}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        {item.name}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex items-center justify-end md:col-span-3 col-span-6">
                <Button className="hidden md:flex" asChild variant="default">
                    <a href="mailto:">Contact Me</a>
                </Button>
                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}
