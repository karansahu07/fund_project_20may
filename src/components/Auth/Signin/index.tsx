import Link from "next/link";
// import GoogleSigninButton from "../GoogleSigninButton";
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <>
      {/* <GoogleSigninButton text="Sign in" /> */}

      {/* <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
        <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
         <h3>sign in with email</h3>
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
      </div> */}

      <div className="my-6 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Sign in with Email
        </h1>
      </div>

      <div>
        <SigninWithPassword />
      </div>

      <div className="mt-6 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
