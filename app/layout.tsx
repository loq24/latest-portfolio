import "./globals.css";
import classNames from "classnames";
import { Inter, Anek_Bangla, Work_Sans } from "next/font/google";
import ScrollSmootherInit from "@/components/wrappers/ScrollSmootherInit";
import CustomCursor from "@/components/wrappers/CustomCursor";
import Nav from "@/components/nav/Nav";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  variable: "--font-anek-bangla",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["200", "300"],
});

export const metadata = {
  title: {
    template: "Lougie Quisel | %s",
    default: "Lougie Quisel | Frontend Web Developer",
  },
  description:
    "A seasoned frontend web developer with a passion for creating engaging and intuitive websites.",
  metadataBase: new URL("https://portfolio-latest-loq24.vercel.app"),
  openGraph: {
    title: {
      template: "Lougie Quisel | %s",
      default: "Lougie Quisel | Frontend Web Developer",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and intuitive websites.",
    url: "https://lougiequisel.digital/",
    siteName: "Lougie Quisel",
    images: [
      {
        url: "/images/lougiequisel.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        inter.variable,
        anekBangla.variable,
        workSans.variable
      )}
    >
      <body className="group bg-slate-50 text-white">
        <CustomCursor>
          <Nav />
          <ScrollSmootherInit>
            {children}
            <Contact />
          </ScrollSmootherInit>
        </CustomCursor>
      </body>
    </html>
  );
}
