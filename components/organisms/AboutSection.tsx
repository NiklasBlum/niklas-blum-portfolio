import SectionHeader from "../molecules/SectionHeader";
import { Heading, Text } from "../atoms";
import Section from "./Section";
import ServiceList from "./ServiceList";
import SkillsGrid from "./SkillsGrid";
import { ABOUT_TEXT, SERVICES, BENEFITS, SKILL_CATEGORIES } from "@/constants";

export default function AboutSection() {
  return (
    <Section
      name="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <SectionHeader title="Über Mich" accentColor="green" />
        </div>

        {/* Grid for About and Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8">
          {/* About */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-4 sm:p-6">
            <Heading
              level={3}
              className="text-gray-900 dark:text-white mb-4 sm:mb-6"
            >
              Wer bin ich
            </Heading>
            <Text className="text-gray-600 dark:text-gray-300">
              {ABOUT_TEXT.whoAmI}
            </Text>
          </div>

          {/* Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-4 sm:p-6">
            <Heading
              level={3}
              className="text-gray-900 dark:text-white mb-4 sm:mb-6"
            >
              Meine Skills / Tech-Stack
            </Heading>
            <SkillsGrid categories={SKILL_CATEGORIES} />
          </div>
        </div>

        {/* Grid for Services and Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8">
          {/* Services */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-4 sm:p-6">
            <Heading
              level={3}
              className="text-gray-900 dark:text-white mb-4 sm:mb-6"
            >
              Was ich mache
            </Heading>
            <ServiceList services={SERVICES} />
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-4 sm:p-6">
            <Heading
              level={3}
              className="text-gray-900 dark:text-white mb-4 sm:mb-6"
            >
              Warum mit mir arbeiten
            </Heading>
            <ServiceList services={BENEFITS} />
          </div>
        </div>
      </div>
    </Section>
  );
}
