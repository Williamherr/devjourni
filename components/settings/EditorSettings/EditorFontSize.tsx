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

export const EditorFontSize = ({
  size,
  setSize,
}: {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const FontItem = (name: string, size: string) => (
    <div className="flex items-center gap-2">
      <div className="rounded-sm border px-2 py-px font-medium bg-sidebar">
        {size}
      </div>
      <span>{name}</span>
    </div>
  );

  const handleFontChange = (e: string) => {
    setSize(e);
  };

  return (
    <div>
      <Label>Text Size</Label>
      <Select onValueChange={handleFontChange} defaultValue={size || "md-text"}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a font" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="sm-text" className="text-sm">
              {FontItem("Small", "S")}
            </SelectItem>
            <SelectItem value="md-text" className="text-base">
              {FontItem("Medium", "M")}
            </SelectItem>
            <SelectItem value="lg-text" className="text-lg">
              {FontItem("Large", "L")}
            </SelectItem>
            <SelectItem value="xl-text" className="text-2xl">
              {FontItem("XLarge", "XL")}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
