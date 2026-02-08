export default function ProjectCard({ project, onOpen }) {

  const isMotionGraphics =
  typeof project?.id === "string" &&
  project.id.includes("motiongraphics")

  const thumbnail = isMotionGraphics
    ? `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
    : project.images?.[0]

  if (!thumbnail) return null
    return (
      <div
        onClick={() => onOpen(project)}
        className="bg-panel rounded-2xl p-4 cursor-pointer hover:-translate-y-1 hover:text-lime-400 transition"
      >
        <img
          src={thumbnail}
          alt={project.title}
          className="h-40 w-full object-cover border-1 border-black/10 rounded-xl"
        />
        <h3 className="mt-4 font-medium">{project.title}</h3>
      </div>
    )
  }
  