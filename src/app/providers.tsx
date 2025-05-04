"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../context/authContext";
import { ToastContainer } from 'react-toastify'; 

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
    <ThemeProvider defaultTheme="light" attribute="class">
      <SidebarProvider>{children}</SidebarProvider>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </ThemeProvider>
    </AuthProvider>
  );
}
