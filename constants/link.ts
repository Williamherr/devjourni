import { GearIcon, Pencil2Icon, ReaderIcon } from "@radix-ui/react-icons";

export const navBarLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/services",
    label: "Services",
  },
  {
    route: "/",
    label: "Pricing",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

export const leftSideBarLinks = {
  top: [
    { name: "Journal", icon: ReaderIcon, path: "/" },
    { name: "New Notes", icon: Pencil2Icon, path: "/profile" },
  ],
  bottom: [{ name: "Settings", icon: GearIcon, path: "/settings" }],
};
