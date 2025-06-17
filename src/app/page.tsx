import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Staff } from "@/components/sections/staff";
import { AiTools } from "@/components/sections/ai-tools";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero /> 
        <About />
        <Staff />
        <AiTools />
        <Contact />
      </main>{/* Assuming MapComponent was part of the main content */}
      <Footer />
    </div>
  );
}
