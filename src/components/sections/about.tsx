import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  "State-of-the-art dental technology",
  "Experienced and compassionate dental professionals",
  "Comprehensive range of dental services",
  "Comfortable and welcoming clinic environment",
  "Personalized treatment plans for every patient",
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background/80">
      <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative order-last h-80 w-full overflow-hidden rounded-xl shadow-xl md:order-first md:h-[450px]">
          <Image
            src="https://storage.googleapis.com/c_the_green_dental_bucket/dental_team-0-live.jpg"
            alt="Dental team working together"
            layout="fill"
            objectFit="cover"
            data-ai-hint="dental team working"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About The West Green Surgery
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            At The West Green Surgery, we are dedicated to providing exceptional dental care in a warm and friendly atmosphere. Our mission is to help our patients achieve and maintain optimal oral health through personalized treatment plans and the latest advancements in dental technology.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our team of highly skilled and compassionate professionals is committed to making your dental experience as comfortable and stress-free as possible. We believe in patient education and take the time to explain all procedures and options available.
          </p>
          <Card className="mt-8 bg-card/50">
            <CardHeader>
              <CardTitle className="font-headline text-xl">Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
