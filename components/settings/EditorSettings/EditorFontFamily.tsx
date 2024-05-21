import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Label } from "../../ui/label";

export const EditorFontFamily = ({
  font,
  setFont,
}: {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const FontItem = (name: string) => (
    <div className="flex items-center gap-2">
      <div className="rounded-sm border px-2 py-px font-medium bg-sidebar">
        Ag
      </div>
      <span>{name}</span>
    </div>
  );

  const handleFontChange = (e: string) => {
    setFont(e);
  };

  return (
    <div>
      <Label>Font Family</Label>
      <Select
        onValueChange={handleFontChange}
        defaultValue={font || "font-sans"}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a font" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="font-sans" className="font-sans">
              {FontItem("Sans")}
            </SelectItem>
            <SelectItem value="font-serif" className="font-serif">
              {FontItem("Serif")}
            </SelectItem>
            <SelectItem value="font-mono" className="font-mono">
              {FontItem("Mono")}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
