"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import AuthStore from "../store/authStore";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext<AuthStore | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authStore = useMemo(() => new AuthStore(), []);
  const pathname = usePathname();
  const router = useRouter();
  const unProtectedRoutes = ["/", "/employees/auth/sign-in", "/admin/auth/sign-in"];
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      await authStore.initialize();
      setHasInitialized(true);

      if (unProtectedRoutes.includes(pathname)) {
        authStore.auth.error = null;
      }

      if (!unProtectedRoutes.includes(pathname) && !authStore.auth.isAuthenticated) {
        router.replace("/");
      }

      console.log(pathname);
    };

    initAuth();
  }, [pathname, authStore, router]);

  if (!hasInitialized || !authStore.auth.isInitialized) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider value={authStore}>
      {children}
    </AuthContext.Provider>
  );
};
