"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./scroll-area";
import { useState } from "react";

import { languages } from "../novel/extensions/customExtensions/codeBlock/langauges";

export function CodeBlockComboBox({
  node,
  editor,
}: {
  node: any;
  editor: any;
}) {
  const handleLanguageChange = (newLanguage: string) => {
    editor.commands.changeLanguage(newLanguage);
  };

  const [open, setOpen] = useState(false);

  const value = node.attrs.language ?? "javascript";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language === value)
            : "Languages"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search languages" className="h-9" />
          <CommandEmpty>No language found.</CommandEmpty>
          <ScrollArea className="h-60">
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language}
                  value={language}
                  onSelect={(currentValue) => {
                    setOpen(false);
                    handleLanguageChange(currentValue);
                  }}
                >
                  {language}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === language ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
