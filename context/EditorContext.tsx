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
  // Get initial width from localStorage or set a default value
  const initialWidth = localStorage.getItem("editorWidth") || "w-6/12";
  const [width, setWidth] = useState(initialWidth);

  // Update localStorage whenever width changes
  useEffect(() => {
    localStorage.setItem("editorWidth", width);
  }, [width]);

  return (
    <EditorContext.Provider value={{ width, setWidth }}>
      {children}
    </EditorContext.Provider>
  );
};
