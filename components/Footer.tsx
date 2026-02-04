export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2026 Niklas Blum. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="https://github.com/NiklasBlum"
            className="hover:text-gray-300 mx-2"
          >
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-300 mx-2">
            LinkedIn
          </a>
          <a href="/impressum" className="hover:text-gray-300 mx-2">
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}
