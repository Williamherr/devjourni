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
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

export function PageMenu({ id }: { id: number | string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const deleteDoc = async () => {
    try {
      const response = await fetch(`/api/pages/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deltedPageId: id,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.recentId !== 0) {
        router.push(`/${data.recentId}`);
        mutate(`/api/pages`);
      }
      console.log("done");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  const handler = () => {
    setOpen(true);
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
            <DropdownMenuItem onClick={handler}>
              <Pencil2Icon width={20} height={20} className="mr-2" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem onClick={deleteDoc}>
              <TrashIcon width={20} height={20} className="mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { isNullOrEmpty } from "@/lib/snippets";

const RenamePopover = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | string;
}): JSX.Element => {
  const [firstOpen, setFirstOpen] = useState(true);
  const [name, setName] = useState("");

  const rename = async (rename: string) => {
    try {
      const response = await fetch(`/api/pages/${id}/page-name`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rename: rename,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      mutate(`/api/pages`);
      console.log("done");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  return (
    <Popover
      open={open}
      onOpenChange={() => {
        if (!firstOpen) {
          setOpen(false);
          if (!isNullOrEmpty(name)) rename(name);
        }
        setFirstOpen(() => !firstOpen);
      }}
    >
      <PopoverTrigger className="block"></PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="col-span-2 h-full"
              onChange={(e) => setName(e.target.value.trim())}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
