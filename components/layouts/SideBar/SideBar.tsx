"use client";

import Link from "next/link";
import useSWR from "swr";
import { ReaderIcon } from "@radix-ui/react-icons";

import { Button, buttonVariants } from "../../ui/button";
import { ScrollArea } from "../../ui/scroll-area";
import { LoadingSpinner } from "../../ui/loading-spinner";

import { CreatePages, Settings } from "../../SideBtnModal";
import { PageMenu } from "../../PageMenu/PageMenu";
import EmptyState from "../../EmptyState";

import { leftSideBarLinks as links } from "@/constants/link";
import { fetcher } from "@/lib/utils";
import { Pages } from "@/types/custom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

const SideBar = () => {
  const sideBarButtonPages = (
    { id, name, icon: Icon, subpages }: Pages,
    key: number,
    level: number = 0
  ) => (
    <Collapsible>
      <li
        key={key}
        className={`${buttonVariants({
          variant: "ghost",
        })} !justify-between gap-4 !flex group w-full`}
      >
        <span
          className={`flex items-center w-full`}
          style={{ marginLeft: `${level}px` }}
        >
          {Icon !== undefined && Icon !== null ? (
            <Icon className="mr-2 h-4 w-4" />
          ) : (
            <>
              <span className="group-hover:hidden group-hover:w-fit mr-2 p-1">
                <ReaderIcon className="h-4 w-4" />
              </span>
              <span className="group-hover:block group-hover:w-fit hidden w-0 rounded-sm mr-2">
                <CollapsibleTrigger
                  asChild
                  className="block p-0 hover:bg-muted-foreground"
                >
                  <Button variant="ghost" size="sm" className="w-fit p-1 h-fit">
                    <ChevronsUpDown className=" h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
              </span>
            </>
          )}
          <Link
            href={id.toString()}
            className="text-ellipsis overflow-hidden flex-1"
          >
            {name}
          </Link>
          <span className="ml-auto group-hover:visible group-hover:block group-hover:w-fit invisible w-0 hover:bg-muted-foreground rounded-sm p-1 ">
            <PageMenu id={id} />
          </span>
        </span>
      </li>
      <CollapsibleContent className="space-y-2">
        {subpages && subpages.length > 0 ? (
          subpages.map((value: Pages, index: number) =>
            sideBarButtonPages({ ...value }, index, level + 2 * 10)
          )
        ) : (
          <div
            style={{ paddingLeft: `${level + 2 * 24}px` }}
            className="text-gray-400 bg-muted mx-1 rounded py-1"
          >
            No Pages
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
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
    return <LoadingSpinner size={45} className="absolute top-1/2 left-16" />;

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
