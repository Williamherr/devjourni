import { ReactNodeViewRenderer } from "@tiptap/react";
import { mergeAttributes, Range } from "@tiptap/core";
import { Image } from "@tiptap/extension-image";
import { Slider } from "@/components/ui/slider";
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    imageBlock: {
      setImageBlock: (attributes: { src: string }) => ReturnType;
      setImageBlockAt: (attributes: {
        src: string;
        pos: number | Range;
      }) => ReturnType;
      setImageBlockAlign: (align: "left" | "center" | "right") => ReturnType;
      setImageBlockWidth: (width: number) => ReturnType;
    };
  }
}

export const ImageBlock = Image.extend({
  name: "image",

  group: "block",

  defining: true,

  isolating: true,

  addAttributes() {
    return {
      src: {
        default: "",
        parseHTML: (element) => element.getAttribute("src"),
        renderHTML: (attributes) => ({
          src: attributes.src,
        }),
      },
      width: {
        default: "100%",
        parseHTML: (element) => element.getAttribute("data-width"),
        renderHTML: (attributes) => ({
          "data-width": attributes.width,
        }),
      },
      align: {
        default: "center",
        parseHTML: (element) => element.getAttribute("data-align"),
        renderHTML: (attributes) => ({
          "data-align": attributes.align,
        }),
      },
      alt: {
        default: undefined,
        parseHTML: (element) => element.getAttribute("alt"),
        renderHTML: (attributes) => ({
          alt: attributes.alt,
        }),
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addCommands() {
    return {
      setImageBlock:
        (attrs) =>
        ({ commands }) => {
          return commands.insertContent({
            type: "imageBlock",
            attrs: { src: attrs.src },
          });
        },

      setImageBlockAt:
        (attrs) =>
        ({ commands }) => {
          return commands.insertContentAt(attrs.pos, {
            type: "imageBlock",
            attrs: { src: attrs.src },
          });
        },

      setImageBlockAlign:
        (align) =>
        ({ commands }) =>
          commands.updateAttributes("image", { align }),

      setImageBlockWidth:
        (width) =>
        ({ commands }) => {
          console.log(width);
          commands.updateAttributes("image", {
            width: `${Math.max(0, Math.min(100, width))}%`,
          });
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageBlockView);
  },
});

import { cn } from "@/lib/utils";
import { Node } from "@tiptap/pm/model";
import { Editor, NodeViewWrapper } from "@tiptap/react";
import { useCallback, useRef, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface ImageBlockViewProps {
  editor: Editor;
  getPos: () => number;
  node: Node & {
    attrs: {
      src: string;
    };
  };
  updateAttributes: (attrs: Record<string, string>) => void;
}

export const ImageBlockView = (props: ImageBlockViewProps) => {
  const { editor, getPos, node } = props;
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const { src } = node.attrs;
  const [width, setWidth] = useState(parseInt(node.attrs.width));

  const wrapperClassName = cn(
    node.attrs.align === "left" ? "ml-0" : "ml-auto",
    node.attrs.align === "right" ? "mr-0" : "mr-auto",
    node.attrs.align === "center" && "mx-auto"
  );

  const onClickHandler = (align: "left" | "center" | "right") => {
    console.log(align);
    editor.commands.setImageBlockAlign(align);
  };

  const onClick = useCallback(() => {
    console.log(node.attrs.width);

    console.log(node.attrs.width.replace("%", ""));
  }, [getPos, editor.commands]);

  const handleResize = (value: number[]) => {
    setWidth(value[0]);
    editor.commands.setImageBlockWidth(width);
  };

  return (
    <NodeViewWrapper>
      <Popover>
        <PopoverTrigger>
          <div className={wrapperClassName} style={{ width: node.attrs.width }}>
            <div contentEditable={false} ref={imageWrapperRef}>
              <img className="block" src={src} alt="" onClick={onClick} />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <div className="space-y-2">
            <div className="space-x-1">
              <Button value="left" onClick={() => onClickHandler("left")}>
                <AlignLeftIcon />
              </Button>
              <Button onClick={() => onClickHandler("center")}>
                <AlignCenterIcon />
              </Button>
              <Button value="right" onClick={() => onClickHandler("right")}>
                <AlignRightIcon />
              </Button>
            </div>
            <div className="flex space-x-5">
              <Slider
                defaultValue={[width]}
                max={100}
                step={5}
                onValueChange={handleResize}
              />
              <p>{width}</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </NodeViewWrapper>
  );
};

export default ImageBlock;
