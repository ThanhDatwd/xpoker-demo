import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/providers/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XPoker",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <ToastContainer theme="dark" />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
