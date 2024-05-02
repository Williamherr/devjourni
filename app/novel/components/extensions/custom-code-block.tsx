import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon } from "lucide-react";
import { EditorInstance } from "novel";
import { copyToClipboard } from "@/lib/snippets";
import { CodeBlockComboBox } from "@/components/ui/combobox";

interface CustomCodeBlockProps {
  editor: EditorInstance;
  node: any;
}

export const customCodeBlock = ({ node, editor }: CustomCodeBlockProps) => {
  return (
    <NodeViewWrapper className="is-empty">
      <pre className="rounded-md bg-muted text-muted-foreground border p-5 font-mono font-medium">
        <div contentEditable={false} className="flex justify-between mb-4">
          <CodeBlockComboBox node={node} editor={editor} />
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
