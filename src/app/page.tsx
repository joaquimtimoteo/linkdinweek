import { Banner } from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import { FAQs } from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { LogoTicker } from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {}
      <Head>
        <title>LinkdinWeek</title>
        <meta name="description" content="" />
        <meta name="keywords" content="next.js, landing page, modern web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {}
      <header>

      <Banner
      message="A Mentorship Experience Tailored for You"
      linkText="Join LinkedIn Week"
      linkHref="#"
      />

      <Navbar />
      </header>

      {}
      <main>
        <LogoTicker />
        <Features />
        <ProductShowcase />
        <FAQs />
        <CallToAction />
      </main>

      {}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
