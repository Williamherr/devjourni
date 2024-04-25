import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import SideBar from "@/components/layouts/SideBar";
import { ReactNode } from "react";

function ResizableLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={15}
          maxSize={40}
          collapsible={true}
          minSize={10}
        >
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} className="!overflow-y-scroll">
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default ResizableLayout;
