"use client";
import React from "react";
import Link from "next/link";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function HomePage() {
  const skills = [
    { icon: FaReact, name: "React", color: "text-cyan-500" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-200" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  ];

  return (
    <main className="bg-gray-900 text-gray-100">

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m Parth Londhe
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Full-stack Web Developer and Tech Enthusiast
          </p>
          <div className="flex space-x-4 justify-center">
            <Link
              href="/projects"
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded font-semibold"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      </div>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        <div className="flex justify-evenly items-center space-x-8 mt-12 flex-wrap">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center mb-6">
                <Icon className={`text-5xl ${skill.color} transition transform hover:scale-110 drop-shadow-[0_0_0.5px_#ffffff55]`} />
                <span className="mt-2 text-gray-200 font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* Button to go to full skills section */}
        <div className="flex justify-center mt-12">
          <Link
            href="/about"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded font-semibold transition"
          >
            View All Skills
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      </div>

      {/* About Teaser */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">
          I’m a passionate developer who loves building projects and exploring new technologies. I create clean, responsive, and modern web apps.
        </p>
        <Link
          href="/about"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-semibold"
        >
          Read More
        </Link>
      </section>

      {/* Divider */}
      <div className="relative h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      </div>

      {/* Projects Teaser */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Some Projects</h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">URL Shortener</h3>
            <p className="mb-4">A full-stack app to shorten URLs.</p>
            <Link href="/projects" className="text-red-500 hover:underline">View Project</Link>
          </div>
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Site</h3>
            <p className="mb-4">My personal portfolio built with Next.js and Tailwind CSS.</p>
            <Link href="/projects" className="text-red-500 hover:underline">View Project</Link>
          </div>
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Weather App</h3>
            <p className="mb-4">A linktree for all your social and web links.</p>
            <Link href="/projects" className="text-red-500 hover:underline">View Project</Link>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link href="/projects" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-semibold">
            See All Projects
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      </div>

      {/* Contact CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg mb-6">Have a project in mind or want to collaborate? Let’s connect!</p>
        <Link href="/contact" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-semibold">
          Contact Me
        </Link>
      </section>

    </main>
  );
}
