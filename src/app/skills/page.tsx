const skills = [
  { name: "HTML", level: 90, color: "from-red-500 to-orange-500" },
  { name: "CSS", level: 75, color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", level: 50, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", level: 75, color: "from-blue-600 to-blue-800" },
  { name: "Next.js", level: 70, color: "from-pink-500 to-purple-500" },
  { name: "Tailwind CSS", level: 75, color: "from-cyan-400 to-cyan-600" },
  { name: "Figma", level: 70, color: "from-pink-500 to-purple-500" },
  { name: "Bootstrap", level: 45, color: "from-purple-600 to-purple-800" },
]

export default function Skills() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        My Skillset
      </h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-pink-300">{skill.name}</span>
              <span className="text-purple-300">{skill.level}%</span>
            </div>
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

