import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/vertical-tabs";
import { AccountSettings } from "./AccountSettings";
import { ScrollArea } from "../ui/scroll-area";
import EditorSettings from "./EditorSettings";

export function SettingTabs() {
  return (
    <div className="flex w-full h-full">
      <Tabs defaultValue="account" className="flex-grow">
        <div className="flex h-full border border-l-0 rounded-r-md">
          <TabsList className="">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="editor">Editor</TabsTrigger>
          </TabsList>
          <ScrollArea className="w-full mb-20">
            <TabsContent value="account" className="w-full">
              <AccountSettings />
            </TabsContent>
            <TabsContent value="editor">
              <EditorSettings />
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </div>
  );
}
