import Image from "next/image";
import { Heading, Text } from "../atoms";
import Section from "./Section";
import { HERO, ABOUT_TEXT } from "@/constants";

export default function HeroSection() {
  return (
    <Section
      name="intro"
      className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[75vh] gap-6 sm:gap-8 md:gap-12">
        {/* Left Side - Profile Image, Name and Title */}
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-6 sm:mb-8 w-48 sm:w-56 md:w-64 aspect-square rounded-full border-[3px] border-gray-600 shadow-lg overflow-hidden">
            <Image
              src={HERO.imageSrc}
              alt={HERO.name}
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Name with gradient text */}
          <Heading
            level={1}
            className=" text-gray-900 dark:text-white mb-3 sm:mb-4"
          >
            {HERO.name}
          </Heading>

          {/* Title with accent */}
          <div className="mb-4 sm:mb-6">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-2">
              {HERO.title}
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <Text variant="subtitle">{ABOUT_TEXT.heroDescription}</Text>
        </div>
      </div>
    </Section>
  );
}
