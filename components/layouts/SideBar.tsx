"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { leftSideBarLinks as routes } from "@/constants/link";
import Link from "next/link";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-fit max-w-xs bg-red-500">
      <div className="flex flex-col items-start p-4 h-full justify-between">
        <div className="space-y-2 w-full">
          {routes.top.map((route, index) => (
            // <Button
            //   variant={"ghost"}
            //   key={index}
            //   className="w-full flex justify-start"
            // >
            //   <route.icon className="mr-2 h-4 w-4" />
            //   {route.name}
            // </Button>
            <Link
              href={route.path}
              key={index}
              className="w-full flex justify-start items-center hover:opacity-50 hover:bg-gray-500 p-1"
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.name}
            </Link>
          ))}
        </div>
        <div className="space-y-2 w-full">
          {routes.bottom.map((route, index) => (
            <Button
              variant={"ghost"}
              key={index}
              className="w-full flex justify-start"
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
