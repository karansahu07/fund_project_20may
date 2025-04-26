import { url } from "inspector";
import * as Icons from "../icons";
import { MdOutlineManageAccounts } from "react-icons/md";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url : "/admin",
        auth: ["admin","user"],
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Manage Employee",
        url: "/admin/manage-employees",
        auth: ["admin"],
        icon: MdOutlineManageAccounts ,
        items: [],
      },
      // {
      //   title: "Profile",
      //   url: "/admin/profile",
      //   icon: Icons.User,
      //   items: [],
      // },
      {
        title: "Add Employee",
        url: "/admin/add-employee",
        icon: Icons.addemployee,
        items: [],
      },{
        title: "Payment",
        url: "/user/payment",
        icon: Icons.payment,
        items: [],
      }
    ],
  }];
