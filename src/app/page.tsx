// 'use client';

// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to the Portal</h1>
//       <Link href="/sign-in/admin">
//         <button>Go to Admin</button>
//       </Link>
//       <Link href="/sign-in/employee">
//         <button>Go to User</button>
//       </Link>
//     </div>
//   );
// }


'use client';
 
import Link from 'next/link';
import { ShieldCheck, UserCircle } from 'lucide-react';
import Image from "next/image";
 
export default function HomePage() {
  return (
 
 
 <div className="min-h-screen flex items-center justify-center bg-[#48acf0] p-4">
      {/* Shadow wrapper with responsive layout */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden bg-white">
        {/* Left Panel */}
        <div className="md:w-1/2 w-full bg-[#1e88e5] text-white p-10 flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 ">Welcome back to Welfare Fund Management tool</h1>
           
         </div>
 
        {/* Right Panel */}
        <div className="md:w-1/2 w-full bg-white p-8 md:p-10 flex flex-col justify-center items-center">
         <Link className="mb-10 inline-block" href="/admin-login">
                             <Image
                                 className="hidden dark:block "
                                 src={"/images/logo/logo.svg"}
                                 alt="Logo"
                                 width={176}
                                 height={32}
                             />
                             <Image
                                 className="dark:hidden items-center"
                                 src={"/images/logo/logo-dark.svg"}
                                 alt="Logo"
                                 width={176}
                                   height={32}
                            />
                          </Link>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 text-center">
            Welcome to the Portal
          </h2>
          <p className="text-gray-600 mb-6 text-sm text-center">
            Please select your role to continue.
          </p>
 
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Link href="/sign-in/admin">
              <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition duration-200 shadow-md hover:shadow-lg w-full">
                <ShieldCheck size={20} />
                Go to Admin
              </button>
            </Link>
            <Link href="/sign-in/employee">
              <button className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-xl transition duration-200 shadow-md hover:shadow-lg w-full">
                <UserCircle size={20} />
                Go to User
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}