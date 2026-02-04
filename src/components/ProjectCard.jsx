export default function ProjectCard({ project, onOpen }) {
    return (
      <div
        onClick={() => onOpen(project)}
        className="bg-panel rounded-2xl p-4 cursor-pointer hover:-translate-y-1 transition"
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="h-40 w-full object-cover rounded-xl"
        />
        <h3 className="mt-4 font-medium">{project.title}</h3>
      </div>
    )
  }
  