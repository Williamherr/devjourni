import {
  TiptapImage,
  TiptapLink,
  UpdatedImage,
  TaskList,
  TaskItem,
  HorizontalRule,
  StarterKit,
  Placeholder,
  AIHighlight,
} from "novel/extensions";
import { UploadImagesPlugin } from "novel/plugins";

import { cx } from "class-variance-authority";

import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import "highlight.js/styles/github-dark-dimmed.css";
import { customCodeBlock } from "./custom-code-block";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { Range } from "@tiptap/core";

//TODO I am using cx here to get tailwind autocomplete working, idk if someone else can write a regex to just capture the class key in objects
const aiHighlight = AIHighlight;

const placeholder = Placeholder.configure({
  placeholder: ({ node }) => {
    switch (node.type.name) {
      case "heading":
        return `Heading ${node.attrs.level}`;
      case "codeBlock":
        return "";
      default:
        return "Press '/' for commands";
    }
  },
  includeChildren: true,
});

const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cx(
      "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer"
    ),
  },
});

const tiptapImage = TiptapImage.extend({
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

const updatedImage = UpdatedImage.configure({
  HTMLAttributes: {
    class: cx("rounded-lg border border-muted"),
  },
});

const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cx("not-prose pl-2 "),
  },
});
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cx("flex gap-2 items-start my-4"),
  },
  nested: true,
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cx("mt-4 mb-6 border-t border-muted-foreground"),
  },
});

const codeBlock = CodeBlockLowlight.extend({
  addNodeView() {
    return ReactNodeViewRenderer(customCodeBlock, {
      contentDOMElementTag: "code",
    });
  },
  addCommands(): any {
    return {
      changeLanguage:
        (language: string) =>
        ({ commands }: { commands: any }) => {
          return commands.updateAttributes("codeBlock", { language });
        },
      deleteRange:
        (range: Range) =>
        ({ tr }: { tr: any }) => {
          tr.deleteRange(range.from, range.to);
          return true;
        },
      toggleCodeBlock:
        () =>
        ({ commands }: { commands: any }) => {
          return commands.toggleNode("codeBlock");
        },
    };
  },
}).configure({
  lowlight: createLowlight(common),
});
const starterKit = StarterKit.configure({
  bulletList: {
    HTMLAttributes: {
      class: cx("list-disc list-outside leading-3 -mt-2"),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cx("list-decimal list-outside leading-3 -mt-2"),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cx("leading-normal -mb-2"),
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: cx("border-l-4 border-primary"),
    },
  },
  codeBlock: false,
  code: {
    HTMLAttributes: {
      class: cx("rounded-md bg-muted  px-1.5 py-1 font-mono font-medium"),
      spellcheck: "false",
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: "#DBEAFE",
    width: 4,
  },
  gapcursor: false,
});

export const defaultExtensions = [
  starterKit,
  placeholder,
  tiptapLink,
  tiptapImage,
  updatedImage,
  taskList,
  taskItem,
  horizontalRule,
  aiHighlight,
  codeBlock,
];
