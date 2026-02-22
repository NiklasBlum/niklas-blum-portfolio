import React from "react";
import Image from "next/image";
import { Heading, Text } from "../atoms";

interface ContactLink {
  name: string;
  url: string;
  imageUrl: string;
  description: string;
}

interface ContactLinksProps {
  links: ContactLink[];
}

export default function ContactLinks({ links }: ContactLinksProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8">
      <Heading level={3} className="text-gray-900 dark:text-white mb-4 sm:mb-6">
        Kanäle
      </Heading>

      <div className="space-y-4 sm:space-y-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center p-2">
              <Image
                src={link.imageUrl}
                alt={link.name}
                width={32}
                height={32}
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            </div>
            <div>
              <Heading level={4} className=" dark:text-white">
                {link.name}
              </Heading>
              <Text
                variant="caption"
                className="text-gray-600 dark:text-gray-400"
              >
                {link.description}
              </Text>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
