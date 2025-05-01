"use client";

import axios from "axios";
import CryptoJS from "crypto-js";
import {
  action,
  autorun,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

axios.defaults.baseURL = "/";
axios.defaults.withCredentials = true;

const SECRET_KEY = "your-secret-key";

const initialUser = {
  role: "",
  username: "",
  email: "",
  homeRoute: "/",
  avatar: "",
};

class AuthStore {
  auth = {
    user: { ...initialUser },
    isInitialized: false,
    isAuthenticated: false,
    isSubmitting: false,
    error: null,
    message: null,
  };

  constructor() {
    makeObservable(this, {
      login: action,
      logout: action,
      initialize: action,
      setAuthError: action,
      auth: observable,
      getRole: computed,
      getUser: computed,
    });

    if (typeof window !== "undefined") {
      this.loadFromLocalStorage();

      autorun(() => {
        if (this.auth.isInitialized) {
          this.saveToLocalStorage();
        }
      });
    }
  }

  encryptData(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  }

  decryptData(cipherText) {
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  }

  saveToLocalStorage() {
    try {
      const encryptedData = this.encryptData({ auth: this.auth });
      localStorage.setItem("user", encryptedData);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }

  loadFromLocalStorage() {
    try {
      const encryptedData = localStorage.getItem("user");
      if (encryptedData) {
        const parsedData = this.decryptData(encryptedData);
        if (parsedData?.auth) {
          runInAction(() => {
            this.auth = parsedData.auth;
          });
          console.log("Loaded auth from storage:", this.auth);
        }
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
  }

  async initialize() {
    runInAction(() => {
      this.auth.isSubmitting = true;
      this.auth.isAuthenticated = false;
    });
  
    try {
      // Load from localStorage if on client
      if (typeof window !== "undefined") {
        const encryptedData = localStorage.getItem("user");
        if (encryptedData) {
          const parsedData = this.decryptData(encryptedData);
          console.log(parsedData);
          if (parsedData?.auth?.isAuthenticated && parsedData.auth.user?.email) {
            runInAction(() => {
              this.auth = {...parsedData.auth};
              this.auth.message = "Session restored from storage.";
            });
          } else {
            runInAction(() => {
              this.auth.user = { ...initialUser };
              this.auth.isAuthenticated = false;
              this.auth.message = "No valid session found.";
            });
          }
        }
      }
    } catch (err) {
      console.error("Initialization error:", err);
      runInAction(() => {
        this.auth.error = "Failed to initialize authentication.";
        this.auth.user = { ...initialUser };
        this.auth.isAuthenticated = false;
      });
    } finally {
      runInAction(() => {
        this.auth.isInitialized = true;
        this.auth.isSubmitting = false;
      });
    }
    console.log("Initializing...", typeof window, {...this.auth});

  }
  

  async login(email, password) {
    runInAction(() => {
      this.auth.isSubmitting = true;
    });

    try {
      const response = await axios.post("/api/login", { email, password });
      const { data } = response;

      runInAction(() => {
        this.auth.isAuthenticated = true;
        this.auth.user = { ...data.user };
        this.auth.isInitialized = true;
        this.auth.message = "Logged in successfully";
        this.auth.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.auth.error = error.response?.data?.message || "Login failed.";
      });
    } finally {
      runInAction(() => {
        this.auth.isSubmitting = false;
      });
    }
  }

  async logout() {
    try {
      await axios.get("/api/logout"); // Adjusted to Next.js route
      runInAction(() => {
        this.auth.isAuthenticated = false;
        this.auth.user = { ...initialUser };
        this.auth.message = "Logged Out Successfully";
        this.auth.error = null;
      });
    } catch (error) {
      console.error("Logout failed:", error);
      runInAction(() => {
        this.auth.error = "Logout Failed.";
      });
    }
  }

  setAuthError(err: any){
    runInAction(() => {
      this.auth.error = err;
    });
  }

  get getRole() {
    return this.auth.user.role || "guest";
  }

  get getUser() {
    return this.auth.user;
  }
}

export default AuthStore;
