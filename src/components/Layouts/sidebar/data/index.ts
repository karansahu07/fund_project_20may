import * as Icons from "../icons";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaRegCalendarAlt, FaRegClipboard, FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import {  ArrowLeftRight } from "lucide-react"
import { LuIndianRupee } from "react-icons/lu"
import { MdOutlineSpaceDashboard } from "react-icons/md";

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
        url: "/admin/dashboard",
        auth: ["Admin"],
        icon: MdOutlineSpaceDashboard,
        items: [],
      },
      {
        title: "Manage Employees",
        url: "/admin/manage-employees",
        auth: ["Admin"],
        icon: MdOutlineManageAccounts,
        items: [],
      },
      {
        title: "Add Employee",
        url: "/admin/add-employee",
        auth: ["Admin"],
        icon: IoPersonAddOutline,
        items: [],
      },
      {
        title: "All Transactions",
        url: "/admin/transactions",
        auth: ["Admin"],
        icon: ArrowLeftRight,
        items: [],
      },
      {
        title: "My Profile",
        url: "/admin/profile",
        auth: ["Admin"],
        icon: AiOutlineProfile,
        items: [],
      },
      
      // Employee specific menu items
      // {
      //   title: "Dashboard",
      //   url: "/employees/dashboard",
      //   auth: ["employee"],
      //   icon: Icons.HomeIcon,
      //   items: [],
      // },
      {
        title: "Dashboard",
        url: "/employees/dashboard",
        auth: ["Employee"],
        icon: MdOutlineSpaceDashboard,
        items: [],
      },
      {
        title: "My Profile",
        url: "/employees/profile",
        auth: ["Employee"],
        icon: AiOutlineProfile,
        items: [],
      },
      {
        title: "Payment",
        url: "/employees/payment",
        auth: ["Employee"],
        icon: LuIndianRupee,
        items: [],
      }
    ],
  },
];

