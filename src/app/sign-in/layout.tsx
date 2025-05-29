import Link from 'next/link'
import React from 'react'
import Image from "next/image";

function Layout({ children }:{children:React.ReactNode}) {
    return (
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
                            {children}
                        </div>

                        {/* <div className="mt-6 text-center">
                            <p>
                                Don’t have any account?{" "}
                                <Link href="/" className="text-primary">
                                    Sign Up
                                </Link>
                            </p>
                        </div> */}
                    </div>
                </div>

                <div className="hidden w-full p-7.5 xl:block items-center xl:w-1/2">
                    <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
                        <Link className="mb-10 inline-block" href={''}>
                            <Image
                                className="hidden dark:block"
                                src={"/images/logo/ekarigar_logo_dark_mode.svg"}
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
    )
}

export default Layout