"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/atoms/profile-image";

interface HeroSectionProps {
  title: string;
  acronym: string[];
  highlight: string;
  description: string;
  primaryAction: {
    href: string;
    label: string;
  };
  secondaryAction: {
    href: string;
    label: string;
  };
  teamImages: string[];
}

export function HeroSection({
  title,
  acronym,
  highlight,
  description,
  primaryAction,
  secondaryAction,
  teamImages,
}: HeroSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading heading-xl mb-4">
                {title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {highlight}
                </span>
              </h1>

              <div className="space-y-1 mb-6">
                {acronym.map((word, index) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-3">
                      {word.charAt(0)}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      {word}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              className="body-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="rounded-full shadow-lg" asChild>
                <Link href={primaryAction.href}>
                  {primaryAction.label}{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative flex">
                {teamImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index === 0 ? -20 : 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    className="animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <ProfileImage
                      src={image}
                      alt={`Team Member ${index + 1}`}
                      size="lg"
                      className={`border-4 border-background shadow-xl ${
                        index > 0 ? "-ml-10" : ""
                      } ${index === 0 ? "z-10" : ""}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
