"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "../ui/button";
import { leftSideBarLinks as routes } from "@/constants/link";
import { SideButton } from "@/types/custom";
import { ReaderIcon } from "@radix-ui/react-icons";

import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

const SideBar = () => {
  const sideButton = ({ name, icon: Icon, path }: SideButton, key: number) => (
    <Button
      variant={"ghost"}
      key={key}
      className="w-full flex justify-start"
      asChild
    >
      <Link href={path.toString()}>
        {Icon !== undefined && Icon !== null ? (
          <Icon className="mr-2 h-4 w-4" />
        ) : (
          <ReaderIcon className="mr-2 h-4 w-4" />
        )}
        {name}
      </Link>
    </Button>
  );

  const { data, error, isLoading } = useSWR(`/api/pages`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    !isLoading && (
      <div className="flex flex-col items-start p-1 h-full justify-between bg-neutral-700">
        <div className="w-full">
          {routes.top.map((route: SideButton, index: any) =>
            sideButton({ ...route }, index)
          )}
        </div>
        <ScrollArea className="my-4 border-t-2 border-b-2 flex-1">
          {data.pages?.map((route: SideButton, index: any) =>
            sideButton({ ...route }, index)
          )}
        </ScrollArea>

        <div className="w-full">
          {routes.bottom.map((route, index) => sideButton({ ...route }, index))}
        </div>
      </div>
    )
  );
};

export default SideBar;
