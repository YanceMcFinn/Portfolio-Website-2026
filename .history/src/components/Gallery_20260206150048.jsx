import ProjectCard from "./ProjectCard"
import { useState } from "react"

export default function Gallery({ projects, onOpen }) {
  const [filter, setFilter] = useState("all")
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        )
  return (
    <div className="wrapper justify-center">
      <h1 className="text-center text-4xl mb-3 mt-0">Project Gallery</h1>
      <div className="w-full flex m-auto place-items-center"><p className={`
${
                    filter === "web"
                      ? "text-lime-400 font-medium mx-2"
                      : "vf transition-all hover:text-lime-400 inline-block mx-2"
                  }`}>WEB</p> | <p className={`
${
                    filter === "graphic"
                      ? "text-lime-400 font-medium mx-2"
                      : "vf transition-all hover:text-lime-400 inline-block mx-2"
                  }`}>GRAPHIC</p> | <p className={`
${
                    filter === "all"
                      ? "text-lime-400 font-medium mx-2"
                      : "vf transition-all hover:text-lime-400 inline-block mx-2"
                  }`}>ALL</p></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onOpen={onOpen}
        />
      ))}
    </div>
    </div>
  )
}
