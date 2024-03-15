import { Button } from "../ui/button";
import { leftSideBarLinks as routes } from "@/constants/link";
import { SideButton } from "@/lib/types";
import Link from "next/link";
import { ReaderIcon } from "@radix-ui/react-icons";

const SideBar = () => {
  const sideButton = ({ name, icon: Icon, path }: SideButton, key: number) => (
    <Button
      variant={"ghost"}
      key={key}
      className="w-full flex justify-start"
      asChild
    >
      <Link href={path}>
        {Icon !== undefined && Icon !== null ? (
          <Icon className="mr-2 h-4 w-4" />
        ) : (
          <ReaderIcon className="mr-2 h-4 w-4" />
        )}
        {name}
      </Link>
    </Button>
  );

  return (
    <div className="w-fit max-w-xs bg-neutral-700">
      <div className="flex flex-col items-start p-1 h-full justify-between">
        <div className="w-full">
          {routes.top.map((route, index) => sideButton({ ...route }, index))}
          <div className="mt-6">
            {routes.pages.map((route, index) =>
              sideButton({ ...route }, index)
            )}
          </div>
        </div>

        <div className="w-full">
          {routes.bottom.map((route, index) => sideButton({ ...route }, index))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
