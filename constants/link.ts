import { SideButton } from "@/lib/types";
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
    { name: "New page", icon: Pencil2Icon, path: "/new-page" },
  ] as SideButton[],
  pages: [
    { name: "page 1", icon: null, path: "/1" },
    { name: "page 2", icon: Pencil2Icon, path: "/2" },
    { name: "page 3", icon: ReaderIcon, path: "/3" },
    { name: "page 4", icon: GearIcon, path: "/4" },
    { name: "page 5", icon: ReaderIcon, path: "/5" },
  ] as SideButton[],
  bottom: [
    { name: "Settings", icon: GearIcon, path: "/settings" },
  ] as SideButton[],
};
