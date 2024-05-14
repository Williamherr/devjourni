import { ChevronDown } from "lucide-react";
import { EditorBubbleItem, useEditor } from "novel";

import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const TEXT_FONT = [
  {
    name: "Default",
  },
  {
    name: "Comic Sans MS",
  },
  {
    name: "Inter",
  },
  {
    name: "monospace",
  },
  {
    name: "serif",
  },
];

interface FontSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FontSelector = ({ open, onOpenChange }: FontSelectorProps) => {
  const { editor } = useEditor();

  if (!editor) return null;
  //   const activeColorItem = TEXT_FONT.find(({ name }) =>
  //     editor.isActive("fontFamily", { name })
  //   );

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button size="sm" className="gap-2 rounded-none" variant="ghost">
          <span className="rounded-sm px-1">Font</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={5}
        className="my-1 flex max-h-80 w-48 flex-col overflow-hidden overflow-y-auto rounded border p-1 shadow-xl "
        align="start"
      >
        <div className="flex flex-col">
          <div className="my-1 px-2 text-sm font-semibold text-muted-foreground">
            Font
          </div>
          {TEXT_FONT.map(({ name }, index) => (
            <EditorBubbleItem
              key={index}
              onSelect={() => {
                editor.commands.unsetColor();
                editor.chain().focus().setFontFamily(name).run();
              }}
              className="flex cursor-pointer items-center justify-between px-2 py-1 text-sm hover:bg-accent"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-sm border px-2 py-px font-medium">
                  {name[0]}
                </div>
                <span>{name}</span>
              </div>
            </EditorBubbleItem>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
