import { ModeToggle } from "../ModeToggle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { useContext } from "react";
import { EditorContext } from "@/context/EditorContext";

const EditorSettings = () => {
  const {
    width,
    setWidth,
  }: { width: string; setWidth: React.Dispatch<React.SetStateAction<string>> } =
    useContext(EditorContext);

  const handleWidthChange = (e: string) => {
    setWidth(e);
  };

  return (
    <>
      <div className="flex flex-col space-y-8">
        <ModeToggle />
        <div>
          <Label>Font</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="comic-sans">Comic Sans MS</SelectItem>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="monospace">Monospace</SelectItem>
                <SelectItem value="serif">Serif</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden md:block">
          <Label>Editor Width</Label>
          <Select onValueChange={handleWidthChange}>
            <SelectTrigger
              className="w-[180px]"
              onChange={() => console.log("fsfds")}
            >
              <SelectValue placeholder={width === "w-6/12" ? "Half" : "Full"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="w-6/12"
                  onChange={() => console.log("fsfds")}
                >
                  Half
                </SelectItem>
                <SelectItem value="w-full" onClick={() => setWidth("w-full")}>
                  Full
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default EditorSettings;
