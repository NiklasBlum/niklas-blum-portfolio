export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs sm:text-sm mb-4 sm:mb-6">
          &copy; {currentYear} Niklas Blum. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <a
            href="https://github.com/NiklasBlum"
            className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <a
            href="https://linkedin.com/in/niklas-blum"
            className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <a
            href="/impressum"
            className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            Impressum
          </a>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <a
            href="/datenschutz"
            className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
