"use client";

import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { leftSideBarLinks as links } from "@/constants/link";
import { Pages } from "@/types/custom";
import { ReaderIcon } from "@radix-ui/react-icons";

import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { CreatePages, Settings } from "../SideBtnModal";
import { PageMenu } from "../PageMenu";
import { LoadingSpinner } from "../ui/loading-spinner";

const SideBar = () => {
  const sideBarButtonPages = ({ name, icon: Icon, id }: Pages, key: number) => (
    <div
      key={key}
      className={`${buttonVariants({
        variant: "ghost",
      })} !justify-between gap-4 !flex`}
    >
      <span className="hover:bg-slate-700 rounded-sm p-1 w-full">
        <Link href={id.toString()} className="flex justify-start items-center">
          {Icon !== undefined && Icon !== null ? (
            <Icon className="mr-2 h-4 w-4" />
          ) : (
            <ReaderIcon className="mr-2 h-4 w-4" />
          )}
          {name}
        </Link>
      </span>
      <span className="hover:bg-slate-700 rounded-sm p-1 ">
        <PageMenu id={id} />
      </span>
    </div>
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
  if (isLoading)
    return <LoadingSpinner size={45} className="relative m-auto" />;

  return (
    !isLoading && (
      <div className="h-full bg-neutral-700">
        <div className="h-full flex flex-col">
          {links.map((link: string, index: number) =>
            sideBarButton(link, index)
          )}

          <ScrollArea className="my-4 border-t-2 flex-1">
            {data.pages?.map((route: Pages, index: number) =>
              sideBarButtonPages({ ...route }, index)
            )}
          </ScrollArea>
        </div>
      </div>
    )
  );
};

export default SideBar;
