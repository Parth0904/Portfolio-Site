"use client";
import React, { useState } from "react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false); // ✅ Track sending state

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // Prevent multiple clicks

    setIsSending(true); // Start sending

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSending(false); // Reset button after sending
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 dark:bg-gray-900 text-white px-4 animate-fadeIn">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300">Get in touch with me for projects or collaborations.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-700 dark:bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-700 dark:bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-700 dark:bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-500"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className={`px-6 py-3 rounded-lg text-white transition ${isSending ? "bg-gray-500 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
              }`}
          >
            {isSending ? "Sending..." : "Send Message"} {/* Button text changes */}
          </button>
        </form>

        <div className="mt-10 text-center text-gray-300 space-y-2">
          <p>Email: <a href="mailto:shridharlondhe98@gmail.com" className="text-red-500 hover:underline">shridharlondhe98@gmail.com</a></p>

          <p className="mt-4">Find me on:</p>
          <div className="flex justify-center gap-6 mt-2 text-5xl">
            <a href="https://www.upwork.com/freelancers/~01361c31a52606a349" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-400">
              <SiUpwork />
            </a>
            <a href="https://www.fiverr.com/parth_londhe/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
              <SiFiverr />
            </a>
            <a href="https://www.linkedin.com/in/parth-londhe-057207343/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Parth0904" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
