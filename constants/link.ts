import { SideButton } from "@/types/custom";
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
  bottom: [
    { name: "Settings", icon: GearIcon, path: "/settings" },
  ] as SideButton[],
};
