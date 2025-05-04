"use client";

import "@/css/satoshi.css";
import "@/css/style.css";



import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { EmailIcon, PasswordIcon } from "@/assets/icons";
import Signin from "@/components/Auth/Signin";
import SigninWithPassword from "@/components/Auth/SigninWithPassword";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Checkbox } from "@/components/FormElements/checkbox";
import InputGroup from "@/components/FormikFields/formikinputgroup";
import { Form, Formik } from "formik";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { useState, useEffect } from "react"
import useAuth from "../../../hooks/useAuth";
import { observer } from "mobx-react-lite"
import { useRouter } from "next/navigation";


const metadata: Metadata = {
  title: "Sign in",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

function SignIn() {

  const [loading, setloading] = useState(false);
  const store = useAuth();
  const router = useRouter();

  const handleSubmit = async (values: { email: any; password: any; }) => {
    // console.log(values);
    // setloading(true);
    await store.login(values.email, values.password);
    // setloading(false);
  }

  useEffect(() => {
    // if (!store.auth.isSubmitting) return;

    if (store.auth.error) {
      alert(store.auth.error);
    } else if (store.auth.isAuthenticated) {
      alert(store.auth.message);
      router.push("/admin/dashboard");
    }
  }, [store.auth.isSubmitting]);

  return (
    <>

      <Formik
        initialValues={{ email: "", password: "", remember: false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors }) => (
          <Form>
            <InputGroup
              type="email"
              label="Email"
              className="mb-4 [&_input]:py-[15px]"
              placeholder="Enter your email"
              name="email"
              icon={<EmailIcon />}
            />

            <InputGroup
              type="password"
              label="Password"
              className="mb-5 [&_input]:py-[15px]"
              placeholder="Enter your password"
              name="password"
              icon={<PasswordIcon />}
            />

            <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
              {/* <Checkbox
                          label="Remember me"
                          name="remember"
                          withIcon="check"
                          minimal
                          radius="md"
                          checked={values.remember}
                          onChange={(e) => setFieldValue("remember", e.target.checked)}
                        /> */}

              <Link
                href="/auth/forgot-password"
                className="hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="mb-4.5">
              <button
                type="submit"
                disabled={store.auth.isSubmitting}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
              >
                Sign In
                {store.auth.isSubmitting && (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-primary dark:border-t-transparent" />
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default observer(SignIn);