import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { mutate } from "swr";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DotsHorizontalIcon,
  TrashIcon,
  Pencil2Icon,
  PlusIcon,
  GearIcon,
} from "@radix-ui/react-icons";

import { RenamePopover } from "./Rename";
import { deletePages } from "@/lib/utils/fetches/deletePages";

interface PageCount {
  newId: number;
}

export function PageMenu({ id }: { id: number | string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname().substring(1);

  const openRenameModal = () => {
    setOpen(true);
  };

  const createPage = async () => {
    fetch("/api/pages/subpages/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.error("Failed to create page");
        }
      })
      .then(async (data: PageCount) => {
        if (data.newId != 0) {
          mutate(`/api/pages`);
          router.push(`/${id}`);
        }
      });
  };

  return (
    <>
      <RenamePopover open={open} setOpen={setOpen} id={id} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DotsHorizontalIcon width={20} height={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Page Edits</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={createPage}>
              <PlusIcon width={20} height={20} className="mr-2" />
              Add Subpage
            </DropdownMenuItem>
            <DropdownMenuItem onClick={openRenameModal}>
              <Pencil2Icon width={20} height={20} className="mr-2" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => deletePages(pathname, id, router)}>
              <TrashIcon width={20} height={20} className="mr-2" />
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openRenameModal}>
              <GearIcon width={20} height={20} className="mr-2" />
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
