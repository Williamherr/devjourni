"use client";

import { type ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { EditorProvider } from "@/context/EditorContext";
import { ModalProvider } from "@/context/ModalContext";

const ToasterProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system";
  };
  return <Toaster theme={theme} />;
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange
      defaultTheme="system"
    >
      <SessionProvider>
        <EditorProvider>
          <ModalProvider>
            <ToasterProvider />
            {children}
            <Analytics />
            <SpeedInsights />
          </ModalProvider>
        </EditorProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
