import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon } from "lucide-react";
import { common } from "lowlight";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EditorInstance } from "novel";
import { copyToClipboard } from "@/lib/snippets";

interface CustomCodeBlockProps {
  editor: EditorInstance;
  node: any;
}

export const customCodeBlock = ({ node, editor }: CustomCodeBlockProps) => {
  return (
    <NodeViewWrapper>
      <pre className="rounded-md bg-muted text-muted-foreground border p-5 font-mono font-medium">
        <div className="flex justify-between mb-4">
          <LanguageSelection node={node} editor={editor} />
          <Button
            variant={"outline"}
            onClick={() => copyToClipboard(node.content.content?.[0].text)}
          >
            <ClipboardCopyIcon size={16} />
          </Button>
        </div>

        <NodeViewContent spellCheck="false" />
      </pre>
    </NodeViewWrapper>
  );
};

export function LanguageSelection({
  node,
  editor,
}: {
  node: any;
  editor: EditorInstance;
}) {
  const handleLanguageChange = (newLanguage: string) => {
    (
      editor as EditorInstance & {
        commands: { changeLanguage: (language: string) => void };
      }
    ).commands.changeLanguage(newLanguage);
  };

  return (
    <Select onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={node.attrs.language ?? "javascript"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {Object.keys(common).map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
