interface SectionHeaderProps {
  title: string;
  accentColor?: string;
}

export default function SectionHeader({
  title,
  accentColor = "blue",
}: SectionHeaderProps) {
  const colorClasses = {
    blue: "from-blue-500 to-purple-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    purple: "from-purple-500 to-purple-600",
  };

  return (
    <>
      <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
        {title}
      </h2>
      <div
        className={`w-24 h-1 bg-linear-to-r ${colorClasses[accentColor as keyof typeof colorClasses]} mx-auto rounded-full mb-8`}
      ></div>
    </>
  );
}
