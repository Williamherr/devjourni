import { ReactNodeViewRenderer } from "@tiptap/react";
import { mergeAttributes, Range } from "@tiptap/core";
import { Image } from "@tiptap/extension-image";
import { cx } from "class-variance-authority";
import { UploadImagesPlugin } from "novel/plugins";

import { ImageBlockView } from "./ImageBlockView";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    imageBlock: {
      // setImageBlock: (attributes: { src: string }) => ReturnType;
      // setImageBlockAt: (attributes: {
      //   src: string;
      //   pos: number | Range;
      // }) => ReturnType;
      setImageBlockAlign: (align: "left" | "center" | "right") => ReturnType;
      setImageBlockWidth: (width: number) => ReturnType;
    };
  }
}

const ImageBlockExtension = Image.extend({
  name: "image",
  draggable: true,

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
      // setImageBlock:
      //   (attrs) =>
      //   ({ commands }) => {
      //     return commands.insertContent({
      //       type: "image",
      //       attrs: { src: attrs.src },
      //     });
      //   },

      // setImageBlockAt:
      //   (attrs) =>
      //   ({ commands }) => {
      //     return commands.insertContentAt(attrs.pos, {
      //       type: "image",
      //       attrs: { src: attrs.src },
      //     });
      //   },

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
          return true; // Fix: Update the return type to boolean
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageBlockView);
  },

  addProseMirrorPlugins() {
    return [
      UploadImagesPlugin({
        imageClass: cx("opacity-40 rounded-lg border border-stone-200"),
      }),
    ];
  },
}).configure({
  allowBase64: true,
  HTMLAttributes: {
    class: cx("rounded-lg border border-muted"),
  },
});

export default ImageBlockExtension;
