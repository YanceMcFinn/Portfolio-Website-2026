import ProjectCard from "./ProjectCard"

const graphicProjects = projects.graphic

export default function Gallery({ projects, onOpen }) {
  return (
    <div className="wrapper">
      <h1 className="text-center text-4xl mb-3 mt-0">Project Gallery</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {graphicProjects.map(project => (
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
