// import "@/css/satoshi.css";
// import "@/css/style.css";

import NextTopLoader from "nextjs-toploader";
import { PropsWithChildren } from "react";
import { Providers } from "./providers";

// import { Sidebar } from "@/components/Layouts/sidebar";

// import "flatpickr/dist/flatpickr.min.css";
// import "jsvectormap/dist/jsvectormap.css";

// import { Header } from "@/components/Layouts/header";
// import type { Metadata } from "next";
// import NextTopLoader from "nextjs-toploader";
// import type { PropsWithChildren } from "react";
// import { Providers } from "./providers";

// export const metadata: Metadata = {
//   title: {
//     template: "Employee Welfare Fund",
//     default: "Employee Welfare Fund",
//   },
//   description:
//     "Employee Welfare Fund",
// };

// export default function RootLayout({ children }: PropsWithChildren) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="h-screen overflow-hidden">
//         <Providers>
//           <NextTopLoader color="#5750F1" showSpinner={false} />
//           {/* <main className="h-full w-full overflow-hidden p-4 md:p-6 2xl:p-10">
//             {children}
//           </main> */}
//            {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen overflow-hidden">
        <Providers>
          <NextTopLoader color="#5750F1" showSpinner={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
