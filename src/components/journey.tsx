"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { journey } from "@/data/journey";
export default function CareerJourney() {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h2 className="font-extrabold text-3xl"> My Journey</h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical Center Line */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-10">
          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="relative flex items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              >
                {/* Year Badge (centered) */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -top-5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                >
                  <Badge
                    variant="outline"
                    className="font-mono text-xs px-3 py-1 bg-background"
                  >
                    {item.year}
                  </Badge>
                </motion.div>

                {/* Icon Circle */}
                <motion.div
                  className={`absolute left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background ${item.color} hidden lg:flex`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
                >
                  {item.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`w-1/2 ${
                    isLeft ? "pr-10 text-right" : "pl-10 text-left ml-auto"
                  } max-lg:w-full max-lg:pl-0 max-lg:pr-0 max-lg:text-left`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                >
                  <Card className="hover:border-primary/40 transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-primary text-sm font-medium">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground text-justify mt-2 text-sm">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
