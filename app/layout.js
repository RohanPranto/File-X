import { Inter, Outfit} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Filex",
  description: "A file sharing app, developed with NextJs by RohanBiswas",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
