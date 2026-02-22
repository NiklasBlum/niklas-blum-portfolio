import SectionHeader from "../molecules/SectionHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import Section from "./Section";
import { CONTACT_LINKS } from "@/constants";

export default function ContactSection() {
  const handleFormSubmit = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  return (
    <Section
      name="contact"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <SectionHeader
            title="Kontakt"
            accentColor="purple"
            subtitle="Planen Sie ein digitales Projekt oder möchten Sie sich unverbindlich austauschen? Ich freue mich auf Ihre Nachricht und darauf, gemeinsam etwas Wertvolles zu schaffen."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <ContactForm onSubmit={handleFormSubmit} />
          <div className="space-y-6 sm:space-y-8">
            <ContactLinks links={CONTACT_LINKS} />
          </div>
        </div>
      </div>
    </Section>
  );
}
