'use client'

import { usePathname } from "next/navigation";

function useNavbar() {
    const currentPath = usePathname();

    const navItems = [
        {
            label: "About us",
            href: "/about",
        },
        {
            label: "Blog",
            href: "/blog",
        },
    ]
    const navMenuItems = [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
    ]
    return { navItems, navMenuItems, currentPath }
}

export default useNavbar