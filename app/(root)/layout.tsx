import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/prosemirror.css";
import { ReactNode } from "react";
import Providers from "../providers";
import ResizableLayout from "@/components/layouts/ResizableLayout";

export const metadata: Metadata = {
  title: "DevJourni - Your Creative Space for Coding and Design Reflections",
  description: `
    Capture the essence of your coding and design journey with DevJourni. 
    Express your thoughts, track your mood, and collaborate with fellow 
    developers and designers in this dedicated space for reflection. 
    Whether you're diving into lines of code, unleashing your design creativity, 
    or navigating sprint cycles, DevJourni is your companion for every step of the way. 
    Join a community that understands the unique blend of art and science in 
    the world of development. Start journaling your coding and design adventures today!
  `,
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex flex-row h-screen">
            <ResizableLayout>{children}</ResizableLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
