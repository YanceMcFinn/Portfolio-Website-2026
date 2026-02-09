import { useState } from "react"

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)

  if (!project) return null

  const isMotionGraphics =
  typeof project?.id === "string" &&
  project.id.includes("motiongraphics")
  const hasImages = Array.isArray(project.images) && project.images.length > 0

const next = () => {
    if (!hasImages) return
    setIndex((index + 1) % project.images.length)
  }

  const prev = () => {
    if (!hasImages) return
    setIndex((index - 1 + project.images.length) % project.images.length)
  }

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative
          w-full
          max-w-6xl
          md:h-full
          bg-black/70
          backdrop-blur-lg
          rounded-2xl
          overflow-hidden
          text-white
          border-white
          border-1"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Image / Slideshow */}
          <div className="w-full
              md:w-3/5
              h-[40vh]
              md:h-full
              relative
              bg-black
              flex
              items-center
              justify-center">
            {isMotionGraphics ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
    />
            ) :
            (<img
              src={project.images[index]}
              alt={project.title}
              className="w-full h-full object-contain"
            />)}

            {!isMotionGraphics && hasImages && project.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full px-3 py-2"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full px-3 py-2"
                >
                  ›
                </button>
              </>
            )}
          </div>
<button
              onClick={onClose}
              className="self-end mb-6 text-muted transition-all hover:text-lime-400 text-xl absolute top-3 right-5"
            >
              ✕
            </button>
          {/* Info Panel */}
          <div className="w-full
              md:w-2/5
              p-6
              overflow-y-auto
              my-auto
              relative">
          

            <h2 className="text-3xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-muted leading-relaxed">
              {project.description}
            </p>
            {project.link && <p className = "mt-2 hover:text-lime-400"><i class="fa-solid fa-arrow-up-right-from-square"></i><a href={project.link} target="_blank" > View Live</a></p> }
          </div>
        </div>
      </div>
    </div>
    
  )
}
