

import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
}

const projects: Project[] = [
     {
        title: "Toy Heaven",
        description: "A fully type-safe e-commerce platform built with Next.js, TypeScript, and tRPC.",
        image: "/images/my-web.png",
        technologies: ["TypeScript", "Next.js", "tailwind"],
      },
      {
        title: "Blog Website",
        description: "A TypeScript-powered task management application with real-time updates and advanced type inference.",
        image: "/images/blog0.png",
        technologies: ["TypeScript", "Next.js", "tailwind"],
      },
      {
        title: "Nike",
        description:
          "A weather dashboard leveraging TypeScript's advanced types for robust data handling and visualization.",
        image: "/images/nike.png",
        technologies: ["TypeScript", "Next.js", "tailwind"],
      },
      {
        title: "Figma",
        description: "A performant blog engine built with TypeScript, featuring SSR and optimized content delivery.",
        image: "/images/figma1.png",
        technologies: ["TypeScript", "Next.js", "tailwind"],
      },
      {
        title: "Furniture",
        description: "An interactive quiz application showcasing TypeScript's type system and React's state management.",
        image: "/images/figma.png",
        technologies: ["TypeScript", "Next.js", "tailwind"],
      },
      {
        title: "Portfolio",
        description:
          "A data visualization tool built with TypeScript, demonstrating complex charting and real-time data handling.",
        image: "/images/port.png",
        technologies: ["TypeScript", "Next.js", "tailwind"],
      },
]

export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
      My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
          //   className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer shadow-lg group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:backdrop-blur-sm before:content-[''] before:absolute before:inset-0 before:bg-pink-500 before:opacity-0 before:transition-opacity before:duration-300 before:rounded-lg group-hover:before:opacity-20 before:blur-xl"
          // >
          className="bg-slate-800 p-2 rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,182,193,0.7)] hover:backdrop-blur-md before:content-[''] before:absolute before:inset-0 before:bg-pink-500 before:opacity-0 before:transition-opacity before:duration-300 before:rounded-lg group-hover:before:opacity-20 before:blur-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="relative z-10 p-6">
              <h3 className="text-2xl mb-2 text-pink-300 group-hover:text-pink-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-purple-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-purple-800 text-purple-200 px-2 py-1 rounded group-hover:bg-purple-700 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


