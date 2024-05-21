import { useContext } from "react";
import { EditorContext } from "@/context/EditorContext";

import { ToggleTheme } from "../../ToggleTheme";
import { EditorFontFamily } from "./EditorFontFamily";
import { EditorFontSize } from "./EditorFontSize";

import EditorWidth from "./EditorWidth";

export const EditorSettings = () => {
  const {
    width,
    setWidth,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
  }: {
    width: string;
    setWidth: React.Dispatch<React.SetStateAction<string>>;
    fontFamily: string;
    setFontFamily: React.Dispatch<React.SetStateAction<string>>;
    fontSize: string;
    setFontSize: React.Dispatch<React.SetStateAction<string>>;
  } = useContext(EditorContext);

  return (
    <>
      <div className="flex flex-col space-y-8">
        <ToggleTheme />
        <EditorFontFamily font={fontFamily} setFont={setFontFamily} />
        <EditorFontSize size={fontSize} setSize={setFontSize} />
        <EditorWidth width={width} setWidth={setWidth} />
      </div>
    </>
  );
};
