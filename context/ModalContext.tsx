import { createContext, useEffect, useState } from "react";
import { AlertModal } from "@/components/AlertModal";
import { PageMenu } from "@/components/PageMenu/PageMenu";
import { RenamePopover } from "@/components/PageMenu/Rename";
import { usePathname } from "next/navigation";

export interface IModalContextValue {
  renameOpen: boolean;
  setRenameOpen: (open: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  menuPosition: { x: number; y: number };
  setMenuPosition: (position: { x: number; y: number }) => void;
  menuId: number;
  setMenuId: (id: number) => void;
  alertOpen: boolean;
  setAlertOpen: (open: boolean) => void;
  currentPageId: string | number;
}

const ModalContext = createContext<IModalContextValue>(
  {} as IModalContextValue
);

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [menuId, setMenuId] = useState(0);
  const [renameOpen, setRenameOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const currentPageId = usePathname();

  const value: IModalContextValue = {
    renameOpen,
    setRenameOpen,
    menuOpen,
    setMenuOpen,
    menuPosition,
    setMenuPosition,
    menuId,
    setMenuId,
    alertOpen,
    setAlertOpen,
    currentPageId,
  };

  useEffect(() => {
    if (menuPosition.x !== 0 && menuPosition.y !== 0) {
      setMenuOpen(true);
    }
  }, [menuPosition]);

  return (
    <ModalContext.Provider value={value}>
      <div>
        <AlertModal open={alertOpen} onOpenChange={setAlertOpen} />
        <PageMenu
          id={menuId}
          pathname={currentPageId}
          menuOpen={menuOpen}
          menuPosition={menuPosition}
          setMenuOpen={setMenuOpen}
          setRenameOpen={setRenameOpen}
        />
        <RenamePopover
          open={renameOpen}
          setOpen={setRenameOpen}
          menuPosition={menuPosition}
          id={menuId}
        />
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
