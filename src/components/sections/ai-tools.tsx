"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { dentalToolExplanation, type DentalToolExplanationInput, type DentalToolExplanationOutput } from "@/ai/flows/dental-tool-explanation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const FormSchema = z.object({
  toolName: z.string().min(2, { message: "Tool name must be at least 2 characters." }),
  patientQuestion: z.string().min(10, { message: "Question must be at least 10 characters." }),
});

type FormData = z.infer<typeof FormSchema>;

export function AiTools() {
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setExplanation(null);
    try {
      const result: DentalToolExplanationOutput = await dentalToolExplanation(data as DentalToolExplanationInput);
      setExplanation(result.explanation);
      reset(); 
    } catch (error) {
      console.error("Error fetching dental tool explanation:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get explanation. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tools" className="py-16 md:py-24 bg-background/80">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our Dental Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Curious about the tools we use? Enter a tool name (e.g., Dental Explorer, Mouth Mirror, Scaler) and your question to get an AI-powered explanation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Wand2 className="h-6 w-6 text-primary" />
                Ask About a Dental Tool
              </CardTitle>
              <CardDescription>
                Get a clear, AI-generated explanation of dental tools and their benefits.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="toolName">Dental Tool Name</Label>
                  <Input
                    id="toolName"
                    placeholder="e.g., Dental Scaler"
                    {...register("toolName")}
                    aria-invalid={errors.toolName ? "true" : "false"}
                  />
                  {errors.toolName && <p className="text-sm text-destructive">{errors.toolName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patientQuestion">Your Question</Label>
                  <Textarea
                    id="patientQuestion"
                    placeholder="e.g., What is this tool used for and why is it important?"
                    {...register("patientQuestion")}
                    aria-invalid={errors.patientQuestion ? "true" : "false"}
                    rows={4}
                  />
                  {errors.patientQuestion && <p className="text-sm text-destructive">{errors.patientQuestion.message}</p>}
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Get Explanation
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="flex items-center justify-center">
            {isLoading && (
              <div className="flex flex-col items-center text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="mt-4 text-lg">Generating explanation...</p>
              </div>
            )}
            {explanation && !isLoading && (
              <Card className="w-full shadow-lg bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">AI Generated Explanation</CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert>
                    <Wand2 className="h-4 w-4" />
                    <AlertTitle>Explanation:</AlertTitle>
                    <AlertDescription className="prose prose-sm dark:prose-invert max-w-none">
                      {explanation.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}
            {!explanation && !isLoading && (
               <div className="text-center p-8 border-2 border-dashed border-border rounded-lg">
                <Wand2 className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-foreground">Waiting for your question</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form to see the AI explanation here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
