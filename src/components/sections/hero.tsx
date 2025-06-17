import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Welcome to The West Green Surgery
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Your Smile, Our Priority. Modern Dental Care in a Friendly Environment. We are committed to providing top-quality dental services to ensure your oral health and well-being.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">
                Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-2xl md:h-[400px] lg:h-[500px]">
          <Image
            src="https://storage.googleapis.com/c_the_green_dental_bucket/dental-practice-0-live.jpg"
            alt="Modern dental clinic interior"
            layout="fill"
            objectFit="cover"
            data-ai-hint="modern dental clinic"
            className="transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
