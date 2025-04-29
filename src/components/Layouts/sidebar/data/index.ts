import * as Icons from "../icons";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaRegCalendarAlt, FaRegClipboard, FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";

export type NavItemType = {
  title: string;
  url?: string;
  icon: any;
  auth?: string[];
  items: NavSubItemType[];
};

export type NavSubItemType = {
  title: string;
  url: string;
};

export type NavSectionType = {
  label: string;
  items: NavItemType[];
};

export const NAV_DATA: NavSectionType[] = [
  {
    label: "MAIN MENU",
    items: [
      // Admin specific menu items
      {
        title: "Dashboard",
        url: "/admin/admin-dashboard",
        auth: ["admin"],
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Manage Employees",
        url: "/admin/manage-employees",
        auth: ["admin"],
        icon: MdOutlineManageAccounts,
        items: [],
      },
      {
        title: "Add Employee",
        url: "/admin/add-employee",
        auth: ["admin"],
        icon: Icons.addemployee,
        items: [],
      },
      
      // Employee specific menu items
      {
        title: "Dashboard",
        url: "/employees/dashboard",
        auth: ["employee"],
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "My Profile",
        url: "/employees/profile",
        auth: ["employee"],
        icon: AiOutlineProfile,
        items: [],
      },
      {
        title: "Payment",
        url: "/employees/payment",
        auth: ["employee"],
        icon: Icons.payment,
        items: [],
      }
    ],
  },
];

/**
 * Filters NAV_DATA based on the provided role.
 * @param {string} role - User role (e.g., "admin", "employee")
 * @returns Filtered navigation data
 */
export function getFilteredNavData(role: string) {
  // If no role is provided yet (e.g., during initial loading), return empty navigation
  if (!role) {
    return [];
  }

  return NAV_DATA.map(section => {
    const filteredItems = section.items.filter(item => {
      // If no auth field, allow all roles
      if (!item.auth || item.auth.length === 0) return true;
      return item.auth.includes(role);
    });

    if (filteredItems.length > 0) {
      return {
        ...section,
        items: filteredItems,
      };
    }

    return null;
  }).filter(Boolean); // Remove null sections
}