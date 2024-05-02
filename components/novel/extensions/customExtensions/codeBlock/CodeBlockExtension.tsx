import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import "highlight.js/styles/github-dark-dimmed.css";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { Range } from "@tiptap/core";
import codeBlockView from "./CodeBlockView";
import { lowlight } from "./langauges";

const codeBlockExtension = CodeBlockLowlight.extend({
  name: "codeBlock",
  group: "block",
  addCommands(): any {
    return {
      changeLanguage:
        (language: string) =>
        ({ commands }: { commands: any }) => {
          commands.updateAttributes("codeBlock", { language });
          return true;
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
  addNodeView() {
    return ReactNodeViewRenderer(codeBlockView, {
      contentDOMElementTag: "code",
    });
  },
}).configure({
  lowlight: lowlight,
});

export default codeBlockExtension;
