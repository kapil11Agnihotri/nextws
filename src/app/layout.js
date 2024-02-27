import "./globals.css";
import { ToastContainer } from "@/utils/toastProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";

const optimistic = localFont({
  src: "../../public/fonts/optimistic_display_md.ttf",
  variable: "--font-optimistic",
});

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={optimistic.variable}
    >
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}