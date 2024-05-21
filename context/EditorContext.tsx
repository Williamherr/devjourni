import { isNullOrEmpty } from "@/lib/snippets";
import { useEditor } from "novel";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

export const EditorContext = createContext<{
  width: string;
  setWidth: Dispatch<SetStateAction<string>>;
  fontFamily: string;
  setFontFamily: Dispatch<SetStateAction<string>>;
  fontSize: string;
  setFontSize: Dispatch<SetStateAction<string>>;
}>({
  width: "",
  setWidth: () => {},
  fontFamily: "",
  setFontFamily: () => {},
  fontSize: "",
  setFontSize: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    const localWidth = window.localStorage.getItem("dj-width");
    const localFontFamily = window.localStorage.getItem("dj-font-family");
    const localFontSize = window.localStorage.getItem("dj-font-size");

    setWidth(localWidth ?? "w-6/12");
    setFontFamily(localFontFamily ?? "font-sans");
    setFontSize(localFontSize ?? "text-md");
  }, []);

  useEffect(() => {
    if (!isNullOrEmpty(width)) localStorage.setItem("dj-width", width);
  }, [width]);

  useEffect(() => {
    if (!isNullOrEmpty(fontFamily))
      localStorage.setItem("dj-font-family", fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    if (!isNullOrEmpty(fontSize))
      localStorage.setItem("dj-font-size", fontSize);
  }, [fontSize]);

  return (
    <EditorContext.Provider
      value={{
        width,
        setWidth,
        fontFamily,
        setFontFamily,
        fontSize,
        setFontSize,
      }}
    >
      <div className={`${fontFamily} ${fontSize} `}>{children}</div>
    </EditorContext.Provider>
  );
};
