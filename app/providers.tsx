"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
} from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import useLocalStorage from "@/hooks/use-local-storage";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const AppContext = createContext<{
  font: string;
  setFont: Dispatch<SetStateAction<string>>;
}>({
  font: "Inter",
  setFont: () => {},
});

const ToasterProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system";
  };
  return <Toaster theme={theme} />;
};

export default function Providers({ children }: { children: ReactNode }) {
  const [font, setFont] = useLocalStorage<string>("novel__font", "Inter");

  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange
      defaultTheme="system"
    >
      <SessionProvider>
        <AppContext.Provider
          value={{
            font,
            // @ts-ignore
            setFont,
          }}
        >
          <ToasterProvider />
          {children}

          <Analytics />
          <SpeedInsights />
        </AppContext.Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}
