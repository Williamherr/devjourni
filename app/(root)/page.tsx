import SideBar from "@/components/layouts/SideBar";
import Editor from "@/components/editor/quill";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <Editor />
    </div>
  );
}
