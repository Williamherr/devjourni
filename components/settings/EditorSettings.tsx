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

const EditorSettings = () => {
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
        <div></div>
      </div>
    </>
  );
};

export default EditorSettings;
