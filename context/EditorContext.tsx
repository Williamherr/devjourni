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
  const initialWidth: string =
    typeof window !== "undefined"
      ? window.localStorage.getItem("editorWidth") || "w-6/12"
      : "w-6/12";
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    localStorage.setItem("editorWidth", width);
  }, [width]);

  return (
    <EditorContext.Provider value={{ width, setWidth }}>
      {children}
    </EditorContext.Provider>
  );
};
