"use client";

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
import useAuth from "../../../../hooks/useAuth";
import {observer} from "mobx-react-lite"
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

  const handleSubmit=async(values)=>{
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
      router.push("/employees/employee-dashboard");
    }
  }, [store.auth.isSubmitting]);

  return (
    <>
      {/* <Breadcrumb pageName="Sign In" /> */}

      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <div className="my-6 text-center">
                <h1 className="text-4xl font-bold text-black dark:text-white">
                  Sign in with Email
                </h1>
              </div>

              <div>
                
            <Formik
                  initialValues={{email:"", password:"", remember:false}}
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
                        <Checkbox
                          label="Remember me"
                          name="remember"
                          withIcon="check"
                          minimal
                          radius="md"
                          checked={values.remember}
                          onChange={(e) => setFieldValue("remember", e.target.checked)}
                        />
            
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
                          disabled = {store.auth.isSubmitting}
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

              </div>

              <div className="mt-6 text-center">
                <p>
                  Don’t have any account?{" "}
                  <Link href="/" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="/admin-login">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Sign in to your account
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please sign in to your account by completing the necessary
                fields in left
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(SignIn);