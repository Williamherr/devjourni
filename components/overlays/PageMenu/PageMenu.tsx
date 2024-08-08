import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TrashIcon, Pencil2Icon, PlusIcon } from "@radix-ui/react-icons";
import { MenuPosition } from "@/context/ModalContext";

import { createPageFetcher } from "@/lib/utils/fetches/index";

interface PageMenuProps {
  id: number | string;
  menuPosition: MenuPosition;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setRenameOpen: (open: boolean) => void;
  setAlertOpen: (open: boolean) => void;
}

export function PageMenu({
  id,
  menuPosition,
  menuOpen,
  setMenuOpen,
  setRenameOpen,
  setAlertOpen,
}: PageMenuProps) {
  const router = useRouter();

  const showAlert = () => {
    setMenuOpen(false);
    setAlertOpen(true);
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
            <DropdownMenuItem onClick={() => createPageFetcher(id, router)}>
              <PlusIcon width={20} height={20} className="mr-2" />
              Add Subpage
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRenameOpen(true)}>
              <Pencil2Icon width={20} height={20} className="mr-2" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem onClick={showAlert}>
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
