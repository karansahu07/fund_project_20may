import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { AddEmployeeForm } from "./components/add-employee";
import { SignInForm } from "./components/sign-in-form";

export const metadata: Metadata = {
  title: "Add Employee",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Add Employee" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <AddEmployeeForm />
        </div>

        {/* <div className="flex flex-col gap-9">
          <SignInForm />
        </div> */}
      </div>
    </>
  );
}
