import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Editor from "@/app/novel/components/Editor";

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-full">Hellow world</DialogContent>
    </Dialog>
  );
}

export default DialogDemo;
