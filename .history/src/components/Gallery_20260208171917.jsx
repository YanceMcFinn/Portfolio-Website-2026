import ProjectCard from "../components/ProjectCard"
import { useState } from "react"
import ProjectModal from "../components/ProjectModal"
import projects from "../data/projects";

export default function Gallery() {
  const [filter, setFilter] = useState("all")
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        )
const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="wrapper text-center mt-3 max-w-6xl mx-auto">
      <h1 className="text-center text-4xl mb-3 mt-0">Project Gallery</h1>
      <div className="flex justify-self-center mb-3">
        <button 
        onClick = {() => setFilter("web")}
        className={`${
                    filter === "web"
                      ? "text-lime-400 font-medium mx-2"
                      : "vf transition-all hover:text-lime-400 inline-block mx-2"
                  }`}>WEB</button>
                   | 
                   <button 
                           onClick = {() => setFilter("graphic")}

                   className={`${
                    filter === "graphic"
                      ? "text-lime-400 font-medium mx-2"
                      : "vf transition-all hover:text-lime-400 inline-block mx-2"
                  }`}>GRAPHIC</button>
                   | <button 
                           onClick = {() => setFilter("all")}

                   className={`
${
                    filter === "all"
                      ? "text-lime-400 font-medium mx-2"
                      : "vf transition-all hover:text-lime-400 inline-block mx-2"
                  }`}>ALL</button></div>
    <div className="m-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => setSelectedProject(project)}
        />
      ))}
    </div>
{selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
