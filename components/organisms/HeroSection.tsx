import Image from "next/image";
import Link from "next/link";
import { Heading, Text } from "../atoms";
import Section from "./Section";
import { HERO, ABOUT_TEXT } from "@/constants";

export default function HeroSection() {
  return (
    <Section
      name="intro"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center border-b border-gray-200 bg-white pb-24 dark:border-gray-800 dark:bg-slate-950"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10">
        {/* Left Side - Profile Image, Name and Title */}
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative mb-6 sm:mb-8 w-48 sm:w-56 md:w-64 aspect-square rounded-full border-[3px] border-gray-600 shadow-lg overflow-hidden animate-fade-in-up">
            <Image
              src={HERO.imageSrc}
              alt="Niklas Blum - Frontend Webentwickler, Porträtfoto"
              width={256}
              height={256}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Name with gradient text */}
          <Heading
            level={1}
            className=" text-gray-900 dark:text-white mb-3 sm:mb-4 animate-fade-in-up animation-delay-300"
          >
            {HERO.name}
          </Heading>

          {/* Title with accent */}
          <div className="mb-4 sm:mb-6 animate-fade-in-up animation-delay-500">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-2">
              {HERO.title}
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-scale-in animation-delay-700"></div>
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="flex max-w-sm animate-fade-in-up flex-col items-center text-center sm:max-w-md md:max-w-2xl lg:max-w-3xl animation-delay-800">
          <Text variant="subtitle" className="lg:text-2xl leading-11!">
            {ABOUT_TEXT.heroDescription}
          </Text>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="#contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              Projekt besprechen
            </Link>
            <Link
              href="/leistungen"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-slate-800"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </div>
      <Link
        href="#about"
        aria-label="Weiter zum Abschnitt Über mich"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-300 animate-fade-in animation-delay-1000 lg:flex"
      >
        <span>Weiter scrollen</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 motion-safe:animate-bounce motion-reduce:animate-none"
        >
          <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </Section>
  );
}
