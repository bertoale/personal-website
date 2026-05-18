import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { skill } from "@/data/skill";
import { div } from "framer-motion/client";

export default function SkillsSection() {
  return (
    <div className="bg-gray-200 w-full overflow-hidden">
    <motion.section
      className="w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="py-6 md:py-12">
        <motion.div
          className="text-center pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight text-primary">
            Tech Stacks & Tools
          </h1>
        </motion.div>

        <motion.ul
          // Grid dengan justify-center untuk menengahkan sisa item di baris terakhir
          className="flex flex-wrap justify-center gap-3 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {skill.map((item) => (
            <motion.li
              key={item.name}
              className="w-[calc(33.333%-12px)] sm:w-[calc(25%-12px)] md:w-[calc(20%-12px)] lg:w-[calc(16.666%-12px)]"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {/* Card dibuat tinggi penuh (h-full) agar rapi dalam grid */}
              <Card className="rounded-xl border shadow-sm hover:shadow-md transition-all h-full bg-card hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center gap-2 p-3 md:p-4 h-full">
                  <div className="flex items-center justify-center rounded-xl  p-2 md:p-3 w-12 h-12 md:w-16 md:h-16">
                    <img
                      src={item.icon}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-sm"
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="text-xs md:text-sm font-semibold tracking-tight text-center line-clamp-1 w-full text-foreground/80">
                    {item.name}
                  </h2>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
    </div>
  );
}