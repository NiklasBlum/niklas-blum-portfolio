"use client";

import Image from "next/image";
import { useState } from "react";
import CheckIcon from "../components/CheckIcon";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      {/* Home/Hero Section */}
      <section id="intro" className="bg-slate-800">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 gap-5 md:gap-12">
          {/* Left Side - Profile Image, Name and Title */}
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="relative mb-8">
              <Image
                src="/Headshot.png"
                alt="Niklas Blum"
                width={256}
                height={256}
                className="relative w-64 h-64 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
              />
            </div>

            {/* Name with gradient text */}
            <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold bg-linear-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 ">
              Niklas Blum
            </h1>

            {/* Title with accent */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
                Full-Stack Web Entwickler
              </p>
              <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Description, Tags, Stats, Buttons */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 italic">
              Sie haben eine Idee oder ein bestehendes Web-Projekt, das
              professionell umgesetzt werden soll? Ich unterstütze Sie als
              Full-Stack-Webentwickler bei der Entwicklung moderner,
              skalierbarer Webanwendungen.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-900 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeader title="Über Mich" accentColor="green" />
          </div>

          {/* Grid for Wer bin ich and Meine Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {/* Wer bin ich */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Wer bin ich
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Ich unterstütze bei der Entwicklung moderner, performanter
                Webanwendungen. Als Full-Stack-Webentwickler mit mehreren Jahren
                Erfahrung setze ich digitale Projekte strukturiert, zuverlässig
                und zukunftssicher um – von der ersten Idee bis zum Live-Gang.
                Gleichzeitig lege ich großen Wert auf Benutzerfreundlichkeit,
                Barrierefreiheit (a11y) und Suchmaschinenoptimierung (SEO),
                damit Anwendungen nicht nur technisch überzeugen, sondern auch
                messbaren Mehrwert liefern. <br />
                Sauberer, wartbarer Code und bewährte Best Practices sind für
                mich selbstverständlich. <br />
              </p>
            </div>

            {/* Was mache ich */}
            {/* Meine Skills */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Meine Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "C#",
                  "Node.js",
                  "REST API's",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Grid for Was ich mache and Warum mit mir arbeiten */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {/* Was ich mache */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Was ich mache
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>Entwicklung moderner Webanwendungen</strong>
                    <br />
                    Maßgeschneiderte Lösungen mit aktuellen Web-Technologien
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>Performance-Optimierung</strong>
                    <br />
                    Schnelle Ladezeiten und saubere technische Umsetzung
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>Responsives Design</strong>
                    <br />
                    Optimale Darstellung auf Desktop, Tablet und Smartphone
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>API-Entwicklung & Backend-Anbindung</strong>
                    <br />
                    Stabile Schnittstellen für Daten, Services und Integrationen
                  </div>
                </li>
              </ul>
            </div>

            {/* Warum mit mir arbeiten */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Warum mit mir arbeiten
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>Direkter Ansprechpartner</strong>
                    <br />
                    Keine Umwege über Projektmanager – Sie sprechen direkt mit
                    dem Entwickler.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>Strukturiertes & transparentes Vorgehen</strong>
                    <br />
                    Klare Absprachen, realistische Einschätzungen und
                    nachvollziehbare Umsetzung.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>Qualität & Nachhaltigkeit</strong>
                    <br />
                    Sauberer, wartbarer Code statt schneller Lösungen, die
                    später Probleme machen.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <div className="ml-3">
                    <strong>Fokus auf Ihr Ziel</strong>
                    <br />
                    Technik dient dem Zweck – Performance, Nutzerfreundlichkeit
                    und Skalierbarkeit stehen im Mittelpunkt.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-800 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeader title="Meine Projekte" accentColor="orange" />
            <p className="text-xl text-gray-400 mx-auto">
              Hier sind einige meiner besten Arbeiten. Jedes Projekt stellt eine
              einzigartige Herausforderung dar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {[1, 2, 3].map((project) => (
              <article
                key={project}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-linear-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Projekt {project}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Eine moderne Webanwendung entwickelt mit React und Next.js.
                    Features include responsive design, API integration, und
                    optimierte Performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Next.js", "TypeScript"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-blue-400 hover:text-blue-300 font-medium">
                      Live Demo
                    </button>
                    <button className="text-gray-400 hover:text-gray-200 font-medium">
                      Code
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-900 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <SectionHeader title="Kontakt" accentColor="purple" />
            <p className="text-xl text-gray-400 mx-auto">
              Planen Sie ein digitales Projekt oder möchten Sie sich
              unverbindlich austauschen? <br />
              Ich freue mich auf Ihre Nachricht und darauf, gemeinsam etwas
              Wertvolles zu schaffen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Nachricht Senden
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Vollständiger Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white transition-all duration-200"
                      placeholder="Ihr vollständiger Name"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    E-Mail-Adresse
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white transition-all duration-200"
                      placeholder="ihre.email@beispiel.com"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nachricht
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white transition-all duration-200 resize-none"
                      placeholder="Erzählen Sie mir von Ihrem Projekt oder sagen Sie einfach Hallo..."
                      required
                    />
                    <div className="absolute top-3 right-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Nachricht Senden
                  <svg
                    className="inline-block ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-7-7 7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Lassen Sie uns verbinden
                </h3>

                <div className="space-y-6">
                  <a
                    href="https://www.linkedin.com/in/niklas-blum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        LinkedIn
                      </h4>
                      <p className="text-gray-400">
                        linkedin.com/in/niklas-blum
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/NiklasBlum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                      <Image
                        src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                        alt="GitHub"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Github
                      </h4>
                      <p className="text-gray-400">
                        https://github.com/NiklasBlum
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
