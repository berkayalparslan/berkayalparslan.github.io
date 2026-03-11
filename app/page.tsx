import Image from "next/image";

const services = [
  {
    title: "Test Automation",
    description:
      "Building automated test suites using Playwright (or any other framework you prefer). CI/CD integration included.",
    icon: "⚙️",
  },
  {
    title: "Manual Testing",
    description:
      "Thorough exploratory and structured manual testing. Test case design, execution, and detailed bug reporting.",
    icon: "🔍",
  },
  {
    title: "API Testing",
    description:
      "REST API validation using tools (e.g. Postman) and custom scripts. Contract testing and performance checks.",
    icon: "🔗",
  },
  {
    title: "Performance Testing",
    description:
      "Load, stress, and endurance testing with k6. Identify bottlenecks before your users do.",
    icon: "📊",
  },
  {
    title: "Mobile Testing",
    description:
      "iOS and Android testing — manual and automated with Appium. Device compatibility and usability testing.",
    icon: "📱",
  },
  {
    title: "QA Strategy & Process",
    description:
      "Test planning, QA process setup, and team mentoring. Helping teams ship with confidence from day one.",
    icon: "📋",
  },
];

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
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            Berkay Alparslan
          </span>
          <div className="flex gap-6 text-sm font-medium">
            <a
              href="#services"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Services
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
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
            Freelance QA Engineer
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Hi, I&apos;m Berkay.
          </h1>
          <p className="mb-6 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I help teams ship reliable software. With hands-on experience in
            test automation, manual testing, and QA strategy, I make sure your
            product works — before your users find out it doesn&apos;t.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-700"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              What I Offer
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
            What I Offer
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            End-to-end quality assurance services tailored to your project needs.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-3 text-3xl">{service.icon}</div>
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
      <section id="skills" className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            Tools & Technologies
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            A selection of technologies and tools I work with regularly.
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
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-600 dark:text-gray-400">
            Looking for a QA engineer for your next project? I&apos;m available
            for freelance contracts. Reach out and let&apos;s talk.
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
          &copy; {new Date().getFullYear()} Berkay Alparslan. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
