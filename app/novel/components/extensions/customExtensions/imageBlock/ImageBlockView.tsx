import { useEffect, useState } from "react";

import { Editor, NodeViewWrapper } from "@tiptap/react";
import { Node } from "@tiptap/pm/model";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  Captions,
} from "lucide-react";

import { useDebouncedCallback } from "use-debounce";

interface ImageBlockViewProps {
  editor: Editor;
  //   getPos: () => number;
  node: Node & {
    attrs: {
      src: string;
    };
  };
  updateAttributes: (attrs: Record<string, string>) => void;
}

export const ImageBlockView = (props: ImageBlockViewProps) => {
  const { editor, node } = props;
  const { src, alt } = node.attrs;
  const parseWidth = parseInt(node.attrs.width);
  const [width, setWidth] = useState(
    !Number.isNaN(parseWidth) ? parseWidth : 100
  );
  const [openCaption, setOpenCaption] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (width !== null) {
        editor.commands.setImageBlockWidth(width);
      }
    });
  }, [width]);

  const wrapperClassName = () => {
    switch (node.attrs.align) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      default:
        return "justify-center";
    }
  };

  const onClickHandler = (align: "left" | "center" | "right") => {
    editor.commands.setImageBlockAlign(align);
  };

  const handleResize = (value: number[]) => {
    setWidth((prevWidth) => value[0]);
  };

  const handleAltChange = (alt: string) => {
    editor.commands.updateAttributes("image", { alt });
  };

  const handlePopoverChange = (isOpen: boolean) => {
    if (!isOpen) {
      setTimeout(() => {
        setOpenCaption(false);
      }, 300);
    }
  };

  const debounced = useDebouncedCallback(
    (value) => {
      handleAltChange(value);
    },
    1000,
    // The maximum time func is allowed to be delayed before it's invoked:
    { maxWait: 2000 }
  );

  return (
    <NodeViewWrapper>
      <div>
        <Popover onOpenChange={handlePopoverChange}>
          <div className={`flex ${wrapperClassName()}`}>
            <PopoverTrigger style={{ width: node.attrs.width }}>
              <img className="m-0 w-full" src={src} alt={alt} />
              <div>{alt}</div>
            </PopoverTrigger>
          </div>

          <PopoverContent className="w-full">
            {openCaption ? (
              <div className="space-y-2">
                <Label>Caption</Label>
                <Input onChange={(e) => debounced(e.target.value)} />
              </div>
            ) : (
              <div className="space-y-2">
                <div className="space-x-1">
                  <Button onClick={() => setOpenCaption(true)}>
                    <Captions />
                  </Button>
                  <Button onClick={() => onClickHandler("left")}>
                    <AlignLeftIcon />
                  </Button>
                  <Button onClick={() => onClickHandler("center")}>
                    <AlignCenterIcon />
                  </Button>
                  <Button onClick={() => onClickHandler("right")}>
                    <AlignRightIcon />
                  </Button>
                </div>
                <div className="flex space-x-5">
                  <Slider
                    defaultValue={[width]}
                    max={100}
                    min={5}
                    step={5}
                    onValueChange={handleResize}
                  />
                  <p>{width}</p>
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </NodeViewWrapper>
  );
};
