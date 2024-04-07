"use client";

import Link from "next/link";

import { Button } from "../ui/button";
import { leftSideBarLinks as links } from "@/constants/link";
import { Pages } from "@/types/custom";
import { ReaderIcon } from "@radix-ui/react-icons";

import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { CreatePages, Settings } from "../SideBtnModal";

const SideBar = () => {
  const sideBarButtonPages = ({ name, icon: Icon, id }: Pages, key: number) => (
    <Button
      variant={"ghost"}
      key={key}
      className="w-full flex justify-start"
      asChild
    >
      <Link href={id.toString()}>
        {Icon !== undefined && Icon !== null ? (
          <Icon className="mr-2 h-4 w-4" />
        ) : (
          <ReaderIcon className="mr-2 h-4 w-4" />
        )}
        {name}
      </Link>
    </Button>
  );

  const sideBarButton = (pageName: string, key: number): JSX.Element => {
    switch (pageName) {
      case "New page":
        return <CreatePages key={key} />;
      case "Settings":
        return <Settings key={key} />;
      default:
        return <></>;
    }
  };

  const { data, error, isLoading } = useSWR(`/api/pages`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    !isLoading && (
      <div className="h-full bg-neutral-700">
        <div className="w-full">
          {links.map((link: string, index: number) =>
            sideBarButton(link, index)
          )}
        </div>
        <ScrollArea className="my-4 border-t-2 flex-1">
          {data.pages?.map((route: Pages, index: number) =>
            sideBarButtonPages({ ...route }, index)
          )}
        </ScrollArea>
      </div>
    )
  );
};

export default SideBar;
