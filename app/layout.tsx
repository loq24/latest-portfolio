import "./globals.css";
import classNames from "classnames";
import { Inter, Anek_Bangla } from "next/font/google";
import ScrollSmootherInit from "@/components/ScrollSmootherInit";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  variable: "--font-anek-bangla",
});

export const metadata = {
  title: "Lougie Quisel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={classNames(inter.variable, anekBangla.variable)}>
      <body className="bg-raisin-black">
        <CustomCursor>
          <ScrollSmootherInit>{children}</ScrollSmootherInit>
        </CustomCursor>
      </body>
    </html>
  );
}
