import { useRouter } from "next/navigation";
import { mutate } from "swr";

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
  TrashIcon,
  Pencil2Icon,
  PlusIcon,
  GearIcon,
} from "@radix-ui/react-icons";

import { deletePages } from "@/lib/utils/fetches/deletePages";

interface PageCount {
  newId: number;
}
interface PageMenuProps {
  id: number | string;
  pathname: string;
  menuPosition: MenuPosition;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setRenameOpen: (open: boolean) => void;
}

interface MenuPosition {
  x: number;
  y: number;
}

export function PageMenu({
  id,
  menuPosition,
  menuOpen,
  setMenuOpen,
  setRenameOpen,
  pathname,
}: PageMenuProps) {
  const router = useRouter();

  const createPage = async () => {
    fetch("/api/pages/subpages/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.error("Failed to create page");
        }
      })
      .then(async (data: PageCount) => {
        if (data.newId != 0) {
          mutate(`/api/pages`);
          router.push(`/${id}`);
        }
      });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: `${menuPosition.y}px`,
        left: `${menuPosition.x}px`,
      }}
    >
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger></DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Page Edits</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={createPage}>
              <PlusIcon width={20} height={20} className="mr-2" />
              Add Subpage
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRenameOpen(true)}>
              <Pencil2Icon width={20} height={20} className="mr-2" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => deletePages(pathname, id, router)}>
              <TrashIcon width={20} height={20} className="mr-2" />
              Delete
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => openRenameModal}>
              <GearIcon width={20} height={20} className="mr-2" />
              Settings
            </DropdownMenuItem> */}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
