import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DotsHorizontalIcon,
  TrashIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export function PageMenu({ id }: { id: number | string }) {
  const router = useRouter();
  const deleteDoc = async () => {
    try {
      const response = await fetch(`/api/pages/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deltedPageId: id,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.recentId);

      if (data.recentId !== 0) {
        router.push(`/${data.recentId}`);
      }
      console.log("done");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsHorizontalIcon width={20} height={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Page Edits</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Pencil2Icon width={20} height={20} className="mr-2" />
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem onClick={deleteDoc}>
            <TrashIcon width={20} height={20} className="mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
