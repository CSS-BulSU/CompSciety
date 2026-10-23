import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "./site.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    default: "CompSciety | Computer Science Society, BulSU",
    template: "%s | CompSciety",
  },
  description:
    "The Computer Science Society of Bulacan State University. Open to every BulSUan, from any college or department, who wants to learn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
