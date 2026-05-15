import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { skill } from "@/data/skill";

export default function SkillsSection() {
  return (
    <motion.section
      className=""
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="">
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h1 className="font-extrabold text-3xl">Tech Stacks & Tools</h1>
        </motion.div>

        <motion.ul
          className="grid w-full gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skill.map((skill, idx) => (
            <motion.li
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.5 }}
            >
              <Card className="rounded-2xl border p-2">
                <CardContent className="flex items-center gap-4 p-2">
                  <div className="flex size-16 items-center justify-center rounded-2xl">
                    <img
                      src={skill.icon}
                      className="h-10 w-10 object-contain"
                      alt={skill.name}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {skill.name}
                    </h2>
                    {/* <p className="text-muted-foreground text-sm uppercase">
                      {skill.role}
                    </p> */}
                  </div>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
