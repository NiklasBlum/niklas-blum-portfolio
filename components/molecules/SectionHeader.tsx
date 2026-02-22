import React from "react";
import Heading from "../atoms/Heading";
import SvgIcon from "../atoms/SvgIcon";

interface GradientAccentBarProps {
  color?: "blue" | "orange" | "green" | "purple";
}

const colorMap = {
  blue: "bg-linear-to-r from-blue-500 to-purple-600",
  orange: "bg-linear-to-r from-orange-500 to-orange-600",
  green: "bg-linear-to-r from-green-500 to-green-600",
  purple: "bg-linear-to-r from-purple-500 to-purple-600",
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
        className="bg-linear-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4 sm:mb-6"
      >
        {title}
      </Heading>
      <div
        className={`${colorMap[accentColor]} w-16 sm:w-20 md:w-24 h-1 mx-auto rounded-full mb-4 sm:mb-6 md:mb-8`}
      ></div>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mx-auto max-w-2xl px-4 sm:px-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}
