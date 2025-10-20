
export interface HeaderMenuItemInterface {
    label: string,
    href?: string,
    submenu?: {
        label: string,
        href: string,
    }[]
}

const menuItems: HeaderMenuItemInterface[] = [
    {
        label: "Home",
        href: "#",
    },
    {
        label: "About",
        submenu: [
            {
                label: "Who we are",
                href: "#",
            },
            {
                label: "Gallery",
                href: "#",
            }
        ]
    },
    {
        label: "Projects",
        href: "#",
    },
    {
        label: "Services",
        href: "#",
    },
    {
        label: "Contact Us",
        href: "#",
    }
]

export default menuItems;