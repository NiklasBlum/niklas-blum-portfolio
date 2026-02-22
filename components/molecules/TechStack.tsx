import React from "react";
import Badge from "../atoms/Badge";

interface TechStackProps {
  technologies: string[];
  variant?: "blue" | "orange" | "green";
}

export default function TechStack({
  technologies,
  variant = "blue",
}: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <Badge key={tech} variant={variant}>
          {tech}
        </Badge>
      ))}
    </div>
  );
}
