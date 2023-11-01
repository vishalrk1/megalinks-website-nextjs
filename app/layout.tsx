import { store } from "@/redux/store";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { ReduxProvider } from "@/provider/redux-provider";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </body>
   </html>
  );
}
