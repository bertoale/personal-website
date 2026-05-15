import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Tambahkan import ini

export default function HeroSection() {
  const badge = "✨ Web Developer";
  const heading = "Hi, I'm Albert.";
  const description =
    "I am a Web Developer with a strong interest in DevOps. I have hands-on experience building web applications using JavaScript and Golang, and I am continuously expanding my skills in automation, deployment, and cloud technologies such as Docker and CI/CD pipelines. I am passionate about learning new technologies, adapting quickly to challenges, and contributing to the development of efficient and reliable systems.";
  const buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.github.com/bertoale",
    },
  };
  const image = {
    src: "https://www.billboard.com/wp-content/uploads/media/alice-in-chains-portrait-billboard-1548.jpg",
    alt: "Alice in Chains band portrait",
  };

  return (
    <section className="pt-20">
      <div>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {badge && <Badge variant="outline">{badge}</Badge>}
            <motion.h1
              className="my-6 text-pretty text-4xl font-bold lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="text-justify text-muted-foreground mb-8 max-w-screen lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {/* {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )} */}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>
          <motion.img
            src={image.src}
            alt={image.alt}
            className="max-h-full w-full rounded-md object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
}
