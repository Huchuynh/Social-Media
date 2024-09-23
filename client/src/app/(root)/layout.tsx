import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from '@/components/shared/RightSideBar';
import "../globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Social Media",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <main className='flex flex-row'>
            <LeftSideBar />
              {children}
            <RightSideBar />
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
