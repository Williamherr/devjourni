export const defaultEditorContent = {
  type: "doc",
  content: [{ type: "paragraph" }],
};

export const novelEditorContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Introducing Novel" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/steven-tey/novel",
                target: "_blank",
              },
            },
          ],
          text: "Novel",
        },
        {
          type: "text",
          text: " is a Notion-style WYSIWYG editor with AI-powered autocompletion. Built with ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tiptap.dev/",
                target: "_blank",
              },
            },
          ],
          text: "Tiptap",
        },
        { type: "text", text: " + " },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://sdk.vercel.ai/docs",
                target: "_blank",
              },
            },
          ],
          text: "Vercel AI SDK",
        },
        { type: "text", text: "." },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Installation" }],
    },
    {
      type: "codeBlock",
      attrs: { language: null },
      content: [{ type: "text", text: "npm i novel" }],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Usage" }],
    },
    {
      type: "codeBlock",
      attrs: { language: null },
      content: [
        {
          type: "text",
          text: 'import { Editor } from "novel";\n\nexport default function App() {\n  return (\n     <Editor />\n  )\n}',
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Features" }],
    },
    {
      type: "orderedList",
      attrs: { tight: true, start: 1 },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Slash menu & bubble menu" }],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "AI autocomplete (type " },
                { type: "text", marks: [{ type: "code" }], text: "++" },
                {
                  type: "text",
                  text: " to activate, or select from slash menu)",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Image uploads (drag & drop / copy & paste, or select from slash menu) ",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://public.blob.vercel-storage.com/pJrjXbdONOnAeZAZ/banner-2wQk82qTwyVgvlhTW21GIkWgqPGD2C.png",
        alt: "banner.png",
        title: "banner.png",
        width: null,
        height: null,
      },
    },
    { type: "horizontalRule" },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Learn more" }],
    },
    {
      type: "taskList",
      content: [
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "Star us on " },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://github.com/steven-tey/novel",
                        target: "_blank",
                      },
                    },
                  ],
                  text: "GitHub",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "Install the " },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://www.npmjs.com/package/novel",
                        target: "_blank",
                      },
                    },
                  ],
                  text: "NPM package",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://vercel.com/templates/next.js/novel",
                        target: "_blank",
                      },
                    },
                  ],
                  text: "Deploy your own",
                },
                { type: "text", text: " to Vercel" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const tipTapShortcuts = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Fast Instantiate" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Make sure to press space after to instantiate the extensions",
        },
      ],
    },
    {
      type: "table",
      content: [
        {
          type: "tableRow",
          content: [
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "Extension",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: [261] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Fast Commands" }],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Example" }],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "How it looks" }],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: " CodeBlock" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [261] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "```lauange" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "```javascript" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: "codeBlock", attrs: { language: "javascript" } },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: " Heading" }],
                },
                { type: "paragraph" },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [261] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "#,..." }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                { type: "paragraph", content: [{ type: "text", text: "#" }] },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "heading",
                  attrs: { level: 1 },
                  content: [{ type: "text", text: "H1" }],
                },
                {
                  type: "heading",
                  attrs: { level: 2 },
                  content: [{ type: "text", text: "H2" }],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: " Bullet List" }],
                },
                { type: "paragraph" },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [261] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "*, -, or +" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                { type: "paragraph", content: [{ type: "text", text: "*" }] },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "bulletList",
                  attrs: { tight: true },
                  content: [
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [{ type: "text", text: "item1" }],
                        },
                      ],
                    },
                    {
                      type: "listItem",
                      content: [
                        {
                          type: "paragraph",
                          content: [{ type: "text", text: "item2" }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: " Todo List" }],
                },
                { type: "paragraph" },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [261] },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "[], or [x]" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: [194] },
              content: [
                { type: "paragraph", content: [{ type: "text", text: "[]" }] },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "taskList",
                  content: [
                    {
                      type: "taskItem",
                      attrs: { checked: false },
                      content: [
                        {
                          type: "paragraph",
                          content: [{ type: "text", text: "Unchecked" }],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "taskList",
                  content: [
                    {
                      type: "taskItem",
                      attrs: { checked: true },
                      content: [
                        {
                          type: "paragraph",
                          content: [{ type: "text", text: "Checked" }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: "paragraph" },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Text Formatting" }],
    },
    {
      type: "table",
      content: [
        {
          type: "tableRow",
          content: [
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "Command",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "Windows/Linux",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "bold" }], text: "macOS" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Copy" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "C" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "C" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                { type: "paragraph", content: [{ type: "text", text: "Cut" }] },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "X" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "X" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Paste" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "V" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "V" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Paste without formatting" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "V" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "V" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Undo" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Z" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Z" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Redo" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Z" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Z" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Add a line break" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Enter" },
                    { type: "hardBreak" },
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Enter" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Enter" },
                    { type: "text", text: " " },
                    { type: "hardBreak" },
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Enter" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: "paragraph" },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Paragraph Formatting" }],
    },
    {
      type: "table",
      content: [
        {
          type: "tableRow",
          content: [
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "Command",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "Windows/Linux",
                    },
                  ],
                },
              ],
            },
            {
              type: "tableHeader",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "bold" }], text: "macOS" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Apply normal text style" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "0" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "0" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Apply heading style 1" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "1" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "1" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Apply heading style 2" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "2" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "2" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Apply heading style 3" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "3" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "3" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Apply heading style 4" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "4" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "4" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Apply heading style 5" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "5" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "5" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Apply heading style 6" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "6" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "6" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Ordered list" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "7" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "7" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Bullet list" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "8" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "8" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Task list" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "9" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "9" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Blockquote" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "B" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "B" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Left align" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "L" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "L" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Center align" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "E" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "E" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Right align" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "R" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "R" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Justify" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "J" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Shift" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "J" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Code block" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "C" },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "Alt" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "C" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Subscript" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "," },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "," },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "tableRow",
          content: [
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Superscript" }],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "code" }],
                      text: "Control",
                    },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "." },
                  ],
                },
              ],
            },
            {
              type: "tableCell",
              attrs: { colspan: 1, rowspan: 1, colwidth: null },
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "code" }], text: "Cmd" },
                    { type: "text", text: " " },
                    { type: "text", marks: [{ type: "code" }], text: "." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
