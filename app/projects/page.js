"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ProjectsSection() {
  const [category, setCategory] = useState("All");

const projects = [
  { 
    title: "Linktree Clone", 
    desc: "Create a customizable link landing page to share all your social and web links in one place.", 
    link: "https://bittree-75yyb1v37-parths-projects-c5a59639.vercel.app/",
    category: "Full-Stack",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "React"]
  },
  { 
    title: "URL Shortener", 
    desc: "A full-stack app to shorten URLs with analytics dashboard.", 
    link: "https://url-shortener-three-steel-20.vercel.app/",
    category: "Backend",
    tech: ["Node.js", "MongoDB", "React"]
  },
  { 
    title: "Password Manager", 
    desc: "Securely store and manage your passwords with encryption and a web interface.", 
    link: "https://passop-gnyumlghq-parths-projects-c5a59639.vercel.app/",
    category: "Full-Stack",
    tech: ["Next.js", "MongoDB", "React", "Tailwind CSS"]
  }
];


  const categories = ["All", "Frontend", "Backend", "Other"];
  const filteredProjects = category === "All" ? projects : projects.filter(p => p.category === category);

  return (
    <>
      {/* Divider */}
      <div className="relative h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      </div>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded font-medium transition ${
                category === cat ? "bg-red-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
          {filteredProjects.map((proj, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="mb-4">{proj.desc}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={proj.link} className="text-red-500 hover:underline font-semibold">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
