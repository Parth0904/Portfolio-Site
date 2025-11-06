import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: FaReact, name: "React", color: "text-cyan-500" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-200" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: FaGitAlt, name: "Git", color: "text-orange-400" },
    { icon: FaGithub, name: "GitHub", color: "text-gray-400" },
  ];

  return (
    <>
      {/* About Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I’m <span className="font-semibold text-gray-100">Parth Londhe</span> – 
            a web developer in the making. I’m passionate about building 
            responsive websites and experimenting with modern tools like{" "}
            <span className="font-semibold text-gray-100">Next.js</span> and{" "}
            <span className="font-semibold text-gray-100">Tailwind CSS</span>. 
            My journey started with the Sigma Web Dev course, where I learned 
            the fundamentals of HTML, CSS, JavaScript, React, and Git/GitHub. 
            I’m currently focused on creating real-world projects, sharpening 
            my problem-solving skills, and exploring cybersecurity to build 
            secure, user-friendly apps.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      </div>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          My Skills
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center transition transform hover:scale-110"
              >
                <Icon
                  className={`text-6xl ${skill.color} drop-shadow-[0_0_0.5px_#ffffff55]`}
                />
                <span className="mt-2 text-gray-300 font-semibold">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
