import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
// import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "vedantbhat.co",
    template: "%s | vedantbhat.co",
  },
  description: "Masters Computer Science student specializing in Machine Learning and Computing Systems",
  openGraph: {
    title: "vedantbhat.co",
    description:
      "Masters Computer Science Student specializing in Machine Learning and Computing Systems",
    url: "https://vedantbhat.co",
    siteName: "vedantbhat.co",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      {/* <head>
        <Analytics />
      </head> */}
      <body
        // className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
        className={`gradient-background`}
      >
        {children}
      </body>
    </html>
  );
}
