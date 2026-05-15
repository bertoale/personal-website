"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User, LocateIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

const cardItems = [
  { icon: User, label: "Name", value: "Albert" },
  { icon: LocateIcon, label: "Location", value: "Mengwi-Badung" },
  { icon: GraduationCap, label: "Education", value: "ITB STIKOM Bali" },
  { icon: Mail, label: "E-Mail", value: "toalber231@gmail.com" },
];

export default function EducationCard() {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="text-center py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h2 className="font-extrabold text-3xl">About Me</h2>
        {/* <p className="text-muted-foreground">Description lorem ipsum</p> */}
      </motion.div>

      <div className="grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.img
          src="https://rockandrollglobe.com/wp-content/uploads/2022/09/image3A50540_Glitch.jpg"
          alt="alt"
          className="h-full w-full object-cover rounded-md min-h-[100px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        />

        <motion.div
          className="space-y-4 text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold">Hello There...</h3>

          <p className="text-xl text-foreground">
            I am an Information Technology student with a strong passion for web
            development and modern software engineering. My journey began with
            exploring frontend technologies, and over time I developed a deep
            interest in building clean, responsive, and user-friendly
            interfaces. This curiosity pushed me to continuously learn and
            improve my technical skills.
          </p>

          <p className="text-xl text-foreground">
            Through academic projects and internship experiences, I have worked
            on website development, internal tools, and simple dashboard
            applications. I am comfortable working with JavaScript, React,
            Next.js, TailwindCSS, and API integration. I also enjoy learning
            backend development to create more complete and functional
            applications.
          </p>

          <p className="text-xl text-foreground">
            I am driven by a desire to keep improving through real-world
            projects, collaboration, and exploring new technologies. My goal is
            to build digital solutions that are not only functional but also
            provide a great user experience. With consistency and passion, I aim
            to grow into a developer who can contribute effectively to the tech
            industry.
          </p>

          {/* Card Items */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {cardItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="w-full p-4">
                    <CardContent className="p-0 flex items-center gap-4">
                      {/* Icon Wrapper */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                        <Icon className="text-primary-foreground h-6 w-6" />
                      </div>

                      {/* Label + Value */}
                      <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-foreground">
                          {item.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
