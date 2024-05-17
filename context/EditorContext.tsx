import { isNullOrEmpty } from "@/lib/snippets";
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
}>({
  width: "w-6/12",
  setWidth: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    const localWidth = window.localStorage.getItem("editorWidth");
    if (localWidth) {
      setWidth(localWidth);
    }
  }, []);

  useEffect(() => {
    if (!isNullOrEmpty(width)) localStorage.setItem("editorWidth", width);
  }, [width]);

  return (
    <EditorContext.Provider value={{ width, setWidth }}>
      {children}
    </EditorContext.Provider>
  );
};
