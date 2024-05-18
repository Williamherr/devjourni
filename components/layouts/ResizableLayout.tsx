"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideBar from "@/components/layouts/SideBar";

import { Button } from "../ui/button";

function ResizableLayout({ children }: { children: ReactNode }) {
  const ref = useRef<ImperativePanelHandle>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const panel = ref.current;
    if (panel) setIsOpen(panel.isExpanded);
  }, []);

  const togglePanel = () => {
    const panel = ref.current;
    if (panel) {
      if (isOpen) panel.collapse();
      else panel.expand();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ResizablePanelGroup autoSaveId="sidebar" direction="horizontal">
        <ResizablePanel
          defaultSize={15}
          maxSize={window.innerWidth <= 768 ? 65 : 40}
          collapsible={true}
          minSize={10}
          ref={ref}
        >
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <Button
            className="h-fit absolute ml-5 top-5 z-10 mb-5 bg-accent p-2 text-sm text-muted-foreground"
            onClick={togglePanel}
          >
            {isOpen ? <DoubleArrowLeftIcon /> : <DoubleArrowRightIcon />}
          </Button>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default ResizableLayout;
