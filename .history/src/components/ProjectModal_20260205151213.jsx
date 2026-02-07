import { useState } from "react"

export default function ProjectModal({ project, onClose }) {
  if (!project) return null
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const isMotionGraphics =
    typeof project?.id === "string" &&
    project.id.includes("motiongraphics")
  const hasImages = Array.isArray(project?.images)


  if (!project) return null

  const next = () =>
    setIndex((index + 1) % project.images.length)

  const prev = () =>
    setIndex((index - 1 + project.images.length) % project.images.length)

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-black/60 backdrop-blur-lg max-w-5xl w-full rounded-2xl border-white border-1 shadow-xl overflow-hidden text-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image / Slideshow */}
          <div className="relative bg-white">
            {isMotionGraphics? (
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
              className="w-full h-[700px] object-contain"
            />)}

            {!isMotionGraphics && project.images?.length > 1 && (
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

          {/* Info Panel */}
          <div className="p-8 flex flex-col justify-center relative">
          <button
              onClick={onClose}
              className="self-end mb-6 text-muted hover:text-white text-xl absolute top-3 right-5"
            >
              ✕
            </button>

            <h2 className="text-3xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-muted leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
