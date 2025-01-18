import { NextPage } from "next";
import Hero from "./_components/hero/Hero";
import Stats from "./_components/hero/Stats";

const Homepage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <Hero />
      <Stats />
    </div>
  )
}

export default Homepage