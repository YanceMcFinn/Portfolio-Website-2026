import ProjectCard from "./ProjectCard"


export default function Gallery({ projects, onOpen }) {
  const [filter, setFilter] = useState("all")
  return (
    <div className="wrapper">
      <h1 className="text-center text-4xl mb-3 mt-0">Project Gallery</h1>
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
