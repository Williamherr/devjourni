"use client";
import { defaultEditorContent } from "@/lib/content";
import React, { useContext, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
  EditorRoot,
  EditorCommand,
  EditorCommandItem,
  EditorCommandEmpty,
  EditorContent,
  type JSONContent,
  EditorInstance,
  EditorCommandList,
} from "novel";
import { handleCommandNavigation } from "novel/extensions";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { defaultExtensions } from "./extensions/extensions";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { NodeSelector } from "./selectors/node-selector";
import { LinkSelector } from "./selectors/link-selector";
import { ColorSelector } from "./selectors/color-selector";
import { TextButtons } from "./selectors/text-buttons";

import GenerativeMenuSwitch from "./generative/generative-menu-switch";
import { slashCommand, suggestionItems } from "./extensions/slash-command";

import { uploadFn } from "./extensions/image-upload";
import { FontSelector } from "./selectors/font-selector";
import { EditorContext } from "@/context/EditorContext";

const extensions = [...defaultExtensions, slashCommand];

const TextEditor = ({
  doc,
  pageId,
  editable = true,
  requireAdmin = false,
}: {
  doc: null | JSONContent;
  pageId: null | number;
  editable?: boolean;
  requireAdmin?: boolean;
}) => {
  const [saveStatus, setSaveStatus] = useState("Saved");
  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openFont, setOpenFont] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  const debouncedUpdates = useDebouncedCallback(
    async (editor: EditorInstance) => {
      const json = editor.getJSON();

      if (!editable) return;
      if (!pageId) {
        window.localStorage.setItem("novel-content", JSON.stringify(json));
        setSaveStatus("Saved");
        return;
      }

      const apiEndpoint = requireAdmin ? "note" : "pages";

      fetch(`api/${apiEndpoint}/${pageId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doc: json }),
      })
        .then((res) => {
          if (res.ok) {
            console.log("Page saved");
          } else {
            console.log("Failed to save page");
          }
        })
        .finally(() => setSaveStatus("Saved"));
    },
    500
  );
  const { width, fontSize }: { width: string; fontSize: string } =
    useContext(EditorContext);

  return (
    <ScrollArea className="w-full h-full">
      <div className="absolute right-5 top-5 z-10 mb-5 rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">
        {saveStatus}
      </div>
      <div
        className={`${
          "lg:" + width || "lg:w-6/12"
        } mobile:w-screen mt-5 m-auto `}
      >
        <EditorRoot>
          <EditorContent
            className="w-full"
            editable={editable}
            initialContent={doc || defaultEditorContent}
            extensions={extensions}
            editorProps={{
              handleDOMEvents: {
                keydown: (_view, event) => handleCommandNavigation(event),
              },
              handlePaste: (view, event) =>
                handleImagePaste(view, event, uploadFn),
              handleDrop: (view, event, _slice, moved) =>
                handleImageDrop(view, event, moved, uploadFn),
              attributes: {
                class: ` prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none w-full max-w-full`,
              },
            }}
            onUpdate={({ editor }) => {
              setSaveStatus("Unsaved");
              debouncedUpdates(editor);
            }}
          >
            <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
              <EditorCommandEmpty className="px-2 text-muted-foreground">
                No results
              </EditorCommandEmpty>
              <EditorCommandList>
                {suggestionItems.map((item) => (
                  <EditorCommandItem
                    value={item.title}
                    onCommand={(val) => item.command && item.command(val)}
                    className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                    key={item.title}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </EditorCommandItem>
                ))}
              </EditorCommandList>
            </EditorCommand>

            <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
              <Separator orientation="vertical" />
              <NodeSelector open={openNode} onOpenChange={setOpenNode} />
              <Separator orientation="vertical" />

              <LinkSelector open={openLink} onOpenChange={setOpenLink} />
              <Separator orientation="vertical" />
              <TextButtons />
              <Separator orientation="vertical" />
              <ColorSelector open={openColor} onOpenChange={setOpenColor} />
              <FontSelector open={openFont} onOpenChange={setOpenFont} />
            </GenerativeMenuSwitch>
          </EditorContent>
        </EditorRoot>
      </div>
    </ScrollArea>
  );
};

export default TextEditor;
