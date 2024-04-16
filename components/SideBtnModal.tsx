"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { GearIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import TextEditor from "@/app/novel/components/Editor";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

interface PageCount {
  id: number;
}
const CreatePages = () => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const createPageHandler = async () => {
    const doc = window.localStorage.getItem("novel-content");
    await fetch(`/api/pages?${title}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ doc, pageName: title }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Failed to create page");
        }
      })
      .then((data: PageCount) => {
        let id = data.id;
        if (id != 0) {
          setOpen(false);
          router.push(`/${id}`);
          mutate(`/api/pages`);
        }
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="w-full flex justify-start">
          <Pencil2Icon className="mr-2 h-4 w-4"></Pencil2Icon> New page
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full md:h-[80vh] h-full">
        <div className="flex flex-col space-y-8 mt-5">
          <Input
            placeholder="Page title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex-1">
            <div className="flex h-full min-h-72 max-h-[60vh]">
              <TextEditor doc={null} pageId={null} />
            </div>
          </div>

          <Button className="md:self-end" onClick={createPageHandler}>
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Settings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="w-full flex justify-start">
          <GearIcon className="mr-2 h-4 w-4" /> Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full md:h-[80vh] h-full">
        <div className="flex flex-col space-y-8 mt-5">
          <Button className="md:self-end">Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { CreatePages, Settings };
