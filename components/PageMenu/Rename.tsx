import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { isNullOrEmpty } from "@/lib/snippets";
import { mutate } from "swr";

export const RenamePopover = ({
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
