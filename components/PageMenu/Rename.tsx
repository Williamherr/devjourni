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
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

interface PageMenuProps {
  id: number | string;
  menuPosition: MenuPosition;
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface MenuPosition {
  x: number;
  y: number;
}

export const RenamePopover = ({
  open,
  setOpen,
  id,
  menuPosition,
}: PageMenuProps): JSX.Element => {
  const [name, setName] = useState("");

  const rename = async () => {
    if (isNullOrEmpty(name)) {
      toast.error("Name cannot be empty");
      return;
    }
    try {
      const response = await fetch(`/api/pages/${id}/page-name`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rename: name,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      mutate(`/api/pages`);
      handleClose();
      toast.success("Page renamed successfully");
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  const handleClose = (): void => {
    setName("");
    setOpen(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: `${menuPosition.y}px`,
        left: `${menuPosition.x}px`,
      }}
    >
      <Popover open={open}>
        <PopoverTrigger></PopoverTrigger>
        <PopoverContent className="w-80">
          <span
            className="absolute top-1 right-1 hover:opacity-50"
            onClick={handleClose}
          >
            <X />
          </span>
          <div className="grid gap-4 mt-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <div className="flex flex-row col-span-3 h-full">
                <Input
                  id="name"
                  onChange={(e) => setName(e.target.value.trim())}
                />
                <Button onClick={rename}>
                  <Check />
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
