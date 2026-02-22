import Heading from "../atoms/Heading";

const colorMap = {
  blue: "bg-linear-to-r from-blue-400 to-purple-800",
  orange: "bg-linear-to-r from-orange-400 to-orange-800",
  green: "bg-linear-to-r from-green-400 to-green-800",
  purple: "bg-linear-to-r from-purple-400 to-purple-800",
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accentColor?: "blue" | "orange" | "green" | "purple";
}

export default function SectionHeader({
  title,
  subtitle,
  accentColor = "blue",
}: SectionHeaderProps) {
  return (
    <div className="text-center">
      <Heading
        level={2}
        className="dark:text-white text-gray-800 min-h-11 md:min-h-15 lg:min-h-17"
      >
        {title}
      </Heading>

      <div
        className={`${colorMap[accentColor]} w-24 sm:w-28 md:w-32 h-1 mx-auto rounded-full mb-4 sm:mb-6 md:mb-8`}
      />

      {subtitle && (
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mx-auto max-w-2xl px-4 sm:px-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}
