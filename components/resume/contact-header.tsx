import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactHeader = () => {
  return (
    <Card className="bg-background">
      <CardContent className="pt-6 text-center space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Akshay Caleb Gollapalli
        </h1>
        <h2 className="text-xl text-muted-foreground">
          Software Engineer
        </h2>
        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:a.caleb.gollapalli@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="https://github.com/acgollapalli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            My GitHub
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

