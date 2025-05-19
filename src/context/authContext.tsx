"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import AuthStore from "../store/authStore";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext<AuthStore | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authStore = useMemo(() => new AuthStore(), []);
  const pathname = usePathname();
  const router = useRouter();
  const unProtectedRoutes = ["/", "/sign-in/employee", "/sign-in/admin"];

  useEffect(() => {
    const initAuth = async () => {
      if (!authStore.auth.isInitialized) {
        await authStore.initialize();
      }

      if (unProtectedRoutes.includes(pathname)) {
        authStore.setAuthError(null);
      }

      // console.log("unprotected routes", !unProtectedRoutes.includes(pathname));
      // console.log("is authenticated", !authStore.auth.isAuthenticated);
      if (!unProtectedRoutes.includes(pathname) && !authStore.auth.isAuthenticated) {
        // console.log("router replace becoz of auth", !unProtectedRoutes.includes(pathname) && !authStore.auth.isAuthenticated);
        router.replace("/");
      }

    };

    initAuth();
  }, [pathname, authStore.auth.isInitialized, authStore.auth.isAuthenticated, authStore.auth.isSubmitting, router,authStore,unProtectedRoutes]);

  if (!authStore.auth.isInitialized) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider value={authStore}>
      {children}
    </AuthContext.Provider>
  );
};
