import { Heading } from "../atoms";
import TechStack from "../molecules/TechStack";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  variant?: "blue" | "orange" | "green";
}

function SkillCategory({
  title,
  skills,
  variant = "blue",
}: SkillCategoryProps) {
  return (
    <div>
      <Heading level={4} className="text-gray-900 dark:text-white mb-3">
        {title}
      </Heading>
      <TechStack technologies={skills} variant={variant} />
    </div>
  );
}

interface SkillsGridProps {
  categories: SkillCategoryProps[];
}

export default function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="space-y-6">
      {categories.map((category, idx) => (
        <SkillCategory
          key={idx}
          title={category.title}
          skills={category.skills}
          variant={category.variant}
        />
      ))}
    </div>
  );
}
