// app/layout.tsx
import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";
import { Providers } from "../providers";
import NextTopLoader from "nextjs-toploader";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | NextAdmin - Next.js Dashboard Kit",
    default: "NextAdmin - Next.js Dashboard Kit",
  },
  description:
    "Next.js admin dashboard toolkit with 200+ templates, UI components, and integrations for fast dashboard development.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <NextTopLoader color="#5750F1" showSpinner={false} />
          <div className="flex min-h-screen">
            {/* Sidebar should not depend on client-only features */}
            <Sidebar />

            <div className="flex-1 bg-gray-2 dark:bg-[#020d1a] flex flex-col">
              <Header />
              {/* Avoid using fixed heights like h-screen on scrollable areas in layouts */}
              <main className="isolate mx-auto w-full max-w-screen-2xl flex-1 overflow-y-auto p-4 md:p-6 2xl:p-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
