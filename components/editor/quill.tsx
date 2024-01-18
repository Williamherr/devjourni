"use client";

import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      ["blockquote", "code-block"],

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      ["bold", "italic", "underline", "strike"], // toggled buttons

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],

      ["clean"], // remove formatting button
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className="w-full overflow-auto"
      modules={modules}
    />
  );
}
