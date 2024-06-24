import "@/styles/globals.css";
import { Gloria_Hallelujah } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata = {
  title: "BOPL DRAFT",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Gloria_Hallelujah({
  weight: "400",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-arch-rival">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
