import SideBar from "@/components/layouts/SideBar";
import TextEditor from "../novel/components/Editor";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <TextEditor />
    </div>
  );
}
