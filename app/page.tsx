"use client";

import Image from "next/image";
import { useState } from "react";

type Lang = "en" | "pl" | "tr";

const translations = {
  en: {
    nav: { services: "Services", skills: "Skills", contact: "Contact" },
    hero: {
      subtitle: "Freelance QA Engineer",
      greeting: "Hi, I\u2019m Berkay.",
      description:
        "Delivering the quality your users expect \u2014 and the confidence your team deserves.",
      cta: "Get in Touch",
      cta2: "What I Offer",
    },
    services: {
      title: "What I Offer",
      subtitle:
        "End-to-end quality assurance services tailored to your project needs.",
      items: [
        {
          title: "Test Automation",
          description:
            "Building automated test suites using Playwright (or any other framework you prefer). CI/CD integration included.",
        },
        {
          title: "Manual Testing",
          description:
            "Thorough exploratory and structured manual testing. Test case design, execution, and detailed bug reporting.",
        },
        {
          title: "API Testing",
          description:
            "REST API validation using tools (e.g. Postman) and custom scripts. Contract testing and performance checks.",
        },
        {
          title: "Performance Testing",
          description:
            "Load, stress, and endurance testing with k6. Identify bottlenecks before your users do.",
        },
        {
          title: "Mobile Testing",
          description:
            "iOS and Android testing \u2014 manual and automated with Appium. Device compatibility and usability testing.",
        },
        {
          title: "QA Strategy & Process",
          description:
            "Test planning, QA process setup, and team mentoring. Helping teams ship with confidence from day one.",
        },
      ],
    },
    skills: {
      title: "Tools & Technologies",
      subtitle: "A selection of technologies and tools I work with regularly.",
    },
    contact: {
      title: "Let\u2019s Work Together",
      subtitle:
        "Looking for a QA engineer for your next project? I\u2019m available for freelance contracts. Reach out and let\u2019s talk.",
    },
    footer: "All rights reserved.",
  },
  pl: {
    nav: { services: "Us\u0142ugi", skills: "Umiej\u0119tno\u015Bci", contact: "Kontakt" },
    hero: {
      subtitle: "Freelance QA Engineer",
      greeting: "Cze\u015B\u0107, jestem Berkay.",
      description:
        "Jako\u015B\u0107, kt\u00F3rej oczekuj\u0105 u\u017Cytkownicy \u2014 i pewno\u015B\u0107, na kt\u00F3r\u0105 zas\u0142uguje Tw\u00F3j zesp\u00F3\u0142.",
      cta: "Skontaktuj si\u0119",
      cta2: "Co oferuj\u0119",
    },
    services: {
      title: "Co oferuj\u0119",
      subtitle:
        "Kompleksowe us\u0142ugi zapewnienia jako\u015Bci dostosowane do potrzeb Twojego projektu.",
      items: [
        {
          title: "Automatyzacja test\u00F3w",
          description:
            "Tworzenie zautomatyzowanych zestaw\u00F3w test\u00F3w za pomoc\u0105 Playwright (lub dowolnego innego frameworka). W\u0142\u0105cznie z integracj\u0105 CI/CD.",
        },
        {
          title: "Testy manualne",
          description:
            "Dok\u0142adne testy eksploracyjne i strukturalne. Projektowanie przypadk\u00F3w testowych, ich wykonywanie i szczeg\u00F3\u0142owe raportowanie b\u0142\u0119d\u00F3w.",
        },
        {
          title: "Testowanie API",
          description:
            "Walidacja REST API za pomoc\u0105 narz\u0119dzi (np. Postman) i niestandardowych skrypt\u00F3w. Testy kontraktowe i wydajno\u015Bciowe.",
        },
        {
          title: "Testy wydajno\u015Bciowe",
          description:
            "Testy obci\u0105\u017Ceniowe, stresowe i wytrzyma\u0142o\u015Bciowe z k6. Identyfikacja w\u0105skich garde\u0142, zanim zrobi\u0105 to Twoi u\u017Cytkownicy.",
        },
        {
          title: "Testy mobilne",
          description:
            "Testowanie iOS i Android \u2014 manualne i zautomatyzowane z Appium. Testy kompatybilno\u015Bci urz\u0105dze\u0144 i u\u017Cyteczno\u015Bci.",
        },
        {
          title: "Strategia i procesy QA",
          description:
            "Planowanie test\u00F3w, konfiguracja proces\u00F3w QA i mentoring zespo\u0142u. Pomagam zespo\u0142om dostarczać z pewno\u015Bci\u0105 od pierwszego dnia.",
        },
      ],
    },
    skills: {
      title: "Narz\u0119dzia i technologie",
      subtitle:
        "Wyb\u00F3r technologii i narz\u0119dzi, z kt\u00F3rymi regularnie pracuj\u0119.",
    },
    contact: {
      title: "Wsp\u00F3\u0142pracujmy",
      subtitle:
        "Szukasz in\u017Cyniera QA do swojego projektu? Jestem dost\u0119pny na zlecenia freelance. Napisz, porozmawiajmy.",
    },
    footer: "Wszelkie prawa zastrze\u017Cone.",
  },
  tr: {
    nav: { services: "Hizmetler", skills: "Yetenekler", contact: "\u0130leti\u015Fim" },
    hero: {
      subtitle: "Freelance QA Engineer",
      greeting: "Merhaba, ben Berkay.",
      description:
        "Kullan\u0131c\u0131lar\u0131n\u0131z\u0131n bekledi\u011Fi kalite \u2014 ekibinizin hak etti\u011Fi g\u00FCven.",
      cta: "\u0130leti\u015Fime Ge\u00E7",
      cta2: "Neler Sunuyorum",
    },
    services: {
      title: "Neler Sunuyorum",
      subtitle:
        "Projenizin ihtiya\u00E7lar\u0131na uyarlanm\u0131\u015F u\u00E7tan uca kalite g\u00FCvence hizmetleri.",
      items: [
        {
          title: "Test Otomasyonu",
          description:
            "Playwright (veya tercih etti\u011Finiz ba\u015Fka bir framework) ile otomatik test paketleri olu\u015Fturma. CI/CD entegrasyonu dahil.",
        },
        {
          title: "Manuel Test",
          description:
            "Kapsaml\u0131 ke\u015Fifsel ve yap\u0131sal manuel testler. Test senaryosu tasar\u0131m\u0131, y\u00FCr\u00FCtme ve detayl\u0131 hata raporlama.",
        },
        {
          title: "API Testi",
          description:
            "Ara\u00E7larla (ör. Postman) ve \u00F6zel scriptlerle REST API do\u011Frulama. S\u00F6zle\u015Fme testleri ve performans kontrolleri.",
        },
        {
          title: "Performans Testi",
          description:
            "k6 ile y\u00FCk, stres ve dayan\u0131kl\u0131l\u0131k testleri. Darbo\u011Fazlar\u0131 kullan\u0131c\u0131lar\u0131n\u0131zdan \u00F6nce tespit edin.",
        },
        {
          title: "Mobil Test",
          description:
            "iOS ve Android testi \u2014 Appium ile manuel ve otomatik. Cihaz uyumlulu\u011Fu ve kullan\u0131labilirlik testleri.",
        },
        {
          title: "QA Strateji ve S\u00FCrec\u0327",
          description:
            "Test planlama, QA s\u00FCrec\u0327 kurulumu ve ekip mentorluk. Ekiplerin ilk g\u00FCnden g\u00FCvenle teslimat yapmas\u0131na yard\u0131mc\u0131 oluyorum.",
        },
      ],
    },
    skills: {
      title: "Ara\u00E7lar ve Teknolojiler",
      subtitle: "D\u00FCzenli olarak \u00E7al\u0131\u015Ft\u0131\u011F\u0131m teknoloji ve ara\u00E7lardan bir se\u00E7ki.",
    },
    contact: {
      title: "Birlikte \u00C7al\u0131\u015Fal\u0131m",
      subtitle:
        "Bir sonraki projeniz i\u00E7in QA m\u00FChendisi mi ar\u0131yorsunuz? Freelance s\u00F6zle\u015Fmeler i\u00E7in m\u00FCsaitim. Yaz\u0131n, konu\u015Fal\u0131m.",
    },
    footer: "T\u00FCm haklar\u0131 sakl\u0131d\u0131r.",
  },
};

const serviceIcons = ["\u2699\uFE0F", "\uD83D\uDD0D", "\uD83D\uDD17", "\uD83D\uDCCA", "\uD83D\uDCF1", "\uD83D\uDCCB"];

const langLabels: Record<Lang, string> = {
  en: "EN",
  pl: "PL",
  tr: "TR",
};

const skills = [
  "Playwright",
  "Appium",
  "k6",
  "Postman",
  "REST APIs",
  "JavaScript",
  "TypeScript",
  "Python",
  "Git",
  "CI/CD",
  "Jenkins",
  "GitHub Actions",
  "Docker",
  "Jira",
  "Agile/Scrum",
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            Berkay Alparslan
          </span>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#services"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t.nav.services}
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t.nav.skills}
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t.nav.contact}
            </a>
            <div className="flex gap-1 rounded-lg border border-gray-200 p-0.5 dark:border-gray-700">
              {(Object.keys(langLabels) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                    lang === l
                      ? "bg-blue-600 text-white"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 md:flex-row md:gap-16 md:py-32">
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-1 border-blue-600 shadow-lg md:h-56 md:w-56">
          <Image
            src="https://avatars.githubusercontent.com/u/15653983?v=4"
            alt="Berkay Alparslan"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {t.hero.subtitle}
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {t.hero.greeting}
          </h1>
          <p className="mb-6 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-700"
            >
              {t.hero.cta}
            </a>
            <a
              href="#services"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            {t.services.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            {t.services.subtitle}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-3 text-3xl">{serviceIcons[i]}</div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-gray-200 dark:border-gray-800"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            {t.skills.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-600 dark:text-gray-400">
            {t.contact.subtitle}
          </p>
          <a
            href="mailto:berkay@bigbangsoft.com"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-700"
          >
            berkay@bigbangsoft.com
          </a>

          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/berkayalparslan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/berkayalparslan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="GitHub"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Berkay Alparslan. {t.footer}
        </div>
      </footer>
    </div>
  );
}
