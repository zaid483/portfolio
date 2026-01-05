import { useState } from "react";

export default function App() {
  const [projects] = useState([
    {
      title: "Todo App",
      desc: "React todo app with state management",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive React & Tailwind portfolio",
      link: "#",
    },
    {
      title: "UI Design Practice",
      desc: "Beautiful UI components practice",
      link: "#",
    },
    { title: "Blog App", desc: "React blog app with API", link: "#" },
  ]);

  const [skills] = useState([
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML & CSS", level: 95 },
  ]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-x-hidden">
      {/* Bright floating shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Header */}
        <header className="text-center mb-16">
          <img
            src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white/50"
          />

          <h1 className="text-5xl font-extrabold text-white mb-2">
            Zaid Afzal
          </h1>
          <p className="text-gray-300 text-lg">
            Frontend Developer | React Enthusiast
          </p>
        </header>

        {/* About Section */}
        <section className="mb-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto text-gray-200 text-lg">
            I build modern, responsive web apps with React and Tailwind CSS. I
            focus on sleek UI, smooth animations, and highly readable designs.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <p className="text-white font-semibold text-center mb-2">
                  {skill.name}
                </p>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 h-2"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-200 mb-4">{proj.desc}</p>
                <a
                  href={proj.link}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white rounded-xl shadow hover:from-purple-500 hover:to-red-500 transition"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300 mb-6">Email: zaid@email.com</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-xl shadow hover:scale-105 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-xl shadow hover:scale-105 transition"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm mt-12 mb-4">
          © 2026 Zaid Afzal
        </footer>
      </div>
    </div>
  );
}
