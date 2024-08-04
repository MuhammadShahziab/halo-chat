import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@app/components/Provider";
import ToastContext from "@app/components/ToastContext";
import TopBar from "@app/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "whatsapp",
  description: "Create a nextjs 14 chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen max-h-screen  flex flex-col`}
      >
        <Provider>
          <ToastContext />

          <main className="">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
