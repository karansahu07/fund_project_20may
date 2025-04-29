"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Get user data from local storage or cookies when component mounts
    const checkAuthStatus = () => {
      try {
        // Check if user data exists in local storage
        const userData = localStorage.getItem("user");
        
        if (userData) {
          setUser(JSON.parse(userData));
        } else {
          // If no user data, redirect to login
          router.push("/admin/auth/sign-in");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [router]);

  // Function to handle login
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // Updated API path to match Next.js App Router convention
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const userData = await response.json();
      
      // Save user data in local storage
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      // Redirect based on user role
      if (userData.role === "admin") {
        router.push("/admin/admin-dashboard");
      } else {
        router.push("/employees/employee-dashboard");
      }

      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Invalid email or password" };
    } finally {
      setLoading(false);
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };
}