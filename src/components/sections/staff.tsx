import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Linkedin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const staffMembers = [
  {
    name: "Dr. Emily Carter",
    title: "Lead Dentist, DDS",
    bio: "Dr. Carter has over 15 years of experience in general and cosmetic dentistry, dedicated to providing top-tier patient care.",
    // image: "https://storage.googleapis.com/c_the_green_dental_bucket/headshot-0-live.jpg",
    image: "/images/headshot-0-live.jpg",
    aiHint: "female dentist portrait",
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Mr. John Smith",
    title: "Dental Hygienist, RDH",
    bio: "John is passionate about preventative care and patient education, helping everyone achieve a healthy smile.",
    // image: "https://storage.googleapis.com/c_the_green_dental_bucket/headshot-2.jpg",
    image: "/images/headshot-2-live.jpg",
    aiHint: "male dental hygienist",
     social: {
      linkedin: "#",
    },
  },
  {
    name: "Ms. Aisha Khan",
    title: "Orthodontic Specialist",
    bio: "Aisha specializes in creating beautiful, straight smiles for patients of all ages using modern orthodontic techniques.",
    // image: "https://storage.googleapis.com/c_the_green_dental_bucket/headshot-1.jpg",
    image: "/images/headshot-1-live.jpg",
    aiHint: "female orthodontist",
     social: {
      linkedin: "#",
    },
  },
  {
    name: "Mr Davina Lee",
    title: "Practice Manager",
    bio: "Davina ensures the smooth operation of our clinic, focusing on patient satisfaction and efficient service.",
    // image: "https://storage.googleapis.com/c_the_green_dental_bucket/headshot-3.jpg",
    image: "/images/headshot-3-live.jpg",
    aiHint: "male practice manager",
     social: {
      linkedin: "#",
    },
  },
];

export function Staff() {
  return (
    <section id="staff" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dedicated professionals committed to your dental health and comfort.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {staffMembers.map((staff) => (
            <Card key={staff.name} className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={staff.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardTitle className="font-headline text-xl text-foreground">{staff.name}</CardTitle>
                <CardDescription className="mt-1 text-primary">{staff.title}</CardDescription>
                <p className="mt-3 text-sm text-muted-foreground">{staff.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  {staff.social.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={staff.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${staff.name} LinkedIn profile`}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                   <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`${staff.name} Portfolio`}>
                        <Briefcase className="h-4 w-4" />
                      </a>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
