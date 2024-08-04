import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@app/components/Provider";
import ToastContext from "@app/components/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "whatsapp",
  description: "Create a nextjs 14 chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}    `}>
        <Provider>
          <ToastContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
