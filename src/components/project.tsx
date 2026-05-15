import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/project";

export default function ProjectList() {
  return (
    <section className="">
      <div className="">
        <div className="text-center py-6">
          <h1 className="font-extrabold text-3xl">Project</h1>
        </div>

        <div className="space-y-8">
          {projects.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col lg:flex-row gap-8 p-6 rounded-2xl"
            >
              {/* Left: Title */}
              <div className="flex flex-col gap-2 lg:w-1/4 justify-center">
                <span className="text-xl font-semibold text-foreground">
                  {item.title}
                </span>
              </div>

              {/* Middle: Description */}
              <CardContent className="flex-1 flex items-center px-0 lg:w-2/4">
                <p className="text-base lg:text-lg text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>

              {/* Right: Image */}
              <div className="flex items-center justify-end lg:w-1/4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md object-cover w-full max-w-xs h-32 lg:h-40"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
