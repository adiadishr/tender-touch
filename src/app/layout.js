import { UseLenis } from "@/lib/lenis";
import "./globals.css";
import { pacifico, rascals } from "@/lib/fonts";
import UseAOS from "@/lib/aos";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Tender Touch",
  description: "Award winning sanitary pads for your comfort and hygiene",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${rascals.variable} antialiased font-sans selection:bg-violet-600 selection:text-white`}
      >
        <Navigation />
        <UseLenis />
        <UseAOS />
        {children}
        <Footer />
      </body>
    </html>
  );
}
