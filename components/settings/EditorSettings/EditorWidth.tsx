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

const EditorWidth = ({
  width,
  setWidth,
}: {
  width: string;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleWidthChange = (e: string) => {
    setWidth(e);
  };

  return (
    <div className="hidden md:block">
      <Label>Editor Width</Label>
      <Select onValueChange={handleWidthChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={width === "w-6/12" ? "Half" : "Full"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="w-6/12" onChange={() => setWidth("w-6/12")}>
              Half
            </SelectItem>
            <SelectItem value="w-full" onClick={() => setWidth("w-full")}>
              Full
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EditorWidth;
