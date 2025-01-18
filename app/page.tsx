import { NextPage } from "next";
import Hero from "./_components/hero/Hero";
import Stats from "./_components/hero/Stats";
import Categories from "./_components/hero/Categories";
import Features from "./_components/hero/Features";
import CTA from "./_components/hero/CTA";
import Footer from "./_components/shared/Footer";

const Homepage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <Hero />
      <Stats />
      <Categories />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default Homepage