import { signOut } from "next-auth/react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/vertical-tabs";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { AccountSettings } from "./AccountSettings";
import EditorSettings from "./EditorSettings";

export function SettingTabs() {
  async function logout() {
    await signOut();
  }

  return (
    <div className="flex w-full h-full">
      <Tabs defaultValue="account" className="flex-grow">
        <div className="flex h-full border border-l-0 rounded-r-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <Button variant="ghost" className="mt-auto" onClick={logout}>
              Signout
            </Button>
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
