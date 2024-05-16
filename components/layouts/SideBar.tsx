"use client";

import Link from "next/link";
import useSWR from "swr";

import { buttonVariants } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { LoadingSpinner } from "../ui/loading-spinner";
import { CreatePages, Settings } from "../SideBtnModal";
import { PageMenu } from "../PageMenu";
import EmptyState from "../EmptyState";
import { ReaderIcon } from "@radix-ui/react-icons";

import { leftSideBarLinks as links } from "@/constants/link";
import { fetcher } from "@/lib/utils";
import { Pages } from "@/types/custom";

const SideBar = () => {
  const sideBarButtonPages = ({ name, icon: Icon, id }: Pages, key: number) => (
    <li
      key={key}
      className={`${buttonVariants({
        variant: "ghost",
      })} !justify-between gap-4 !flex group w-full `}
    >
      <Link href={id.toString()} className="flex items-center w-full">
        {Icon !== undefined && Icon !== null ? (
          <Icon className="mr-2 h-4 w-4" />
        ) : (
          <ReaderIcon className="mr-2 h-4 w-4" />
        )}
        <span className="text-ellipsis overflow-hidden flex-1">{name}</span>

        <span className="ml-auto group-hover:visible group-hover:block group-hover:w-fit invisible w-0 hover:bg-muted-foreground rounded-sm p-1 ">
          <PageMenu id={id} />
        </span>
      </Link>
    </li>
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
  if (error) return <EmptyState />;
  if (isLoading)
    return <LoadingSpinner size={45} className="relative m-auto" />;

  return (
    !isLoading && (
      <div className="h-full bg-sidebar">
        <div className="h-full flex flex-col">
          {links.map((link: string, index: number) =>
            sideBarButton(link, index)
          )}
          <ScrollArea className="sideBarScroll my-2 py-2 border-t-2 w-full">
            <ul>
              {data.pages?.map((route: Pages, index: number) =>
                sideBarButtonPages({ ...route }, index)
              )}
            </ul>
          </ScrollArea>
        </div>
      </div>
    )
  );
};

export default SideBar;
