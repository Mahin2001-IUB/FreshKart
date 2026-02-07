
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { AuthProvider } from "@/app/context/AuthContext";
// import { ShopCartProvider } from "@/app/store/ShopCartStore";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "FreshKart",
//   description: "Online grocery shopping platform",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <AuthProvider>
//           <ShopCartProvider>
//             {children}
//           </ShopCartProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/context/AuthContext";
import { ShopCartProvider } from "@/app/store/ShopCartStore";
import BackButton from "@/app/components/BackButton/BackButton"; // <-- add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FreshKart",
  description: "Online grocery shopping platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ShopCartProvider>

            {/* Global Back Button */}
            <BackButton />

            {children}

          </ShopCartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}




