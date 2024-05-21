"use client";

import { type ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { EditorProvider } from "@/context/EditorContext";

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
          <ToasterProvider />
          {children}
          <Analytics />
          <SpeedInsights />
        </EditorProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
