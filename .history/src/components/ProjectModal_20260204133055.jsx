import { useState } from "react"

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  if (!project) return null

  const next = () =>
    setIndex((index + 1) % project.images.length)

  const prev = () =>
    setIndex((index - 1 + project.images.length) % project.images.length)

  return (
    <>
      {/* ===== Main Modal Overlay ===== */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
        onClick={onClose}
      >
        {/* Modal Shell (handles rounding + clipping) */}
        <div
          className="rounded-2xl overflow-hidden max-w-5xl w-full shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Body */}
          <div className="bg-panel/80 backdrop-blur-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* ===== Image / Slideshow ===== */}
              <div className="relative bg-black h-[420px]">
                <img
                  src={project.images[index]}
                  alt={project.title}
                  className="w-full h-full object-contain cursor-zoom-in"
                  onClick={() => setZoomed(true)}
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full px-3 py-2 text-xl"
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full px-3 py-2 text-xl"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* ===== Info Panel ===== */}
              <div className="p-8 flex flex-col justify-center">
                <button
                  onClick={onClose}
                  className="self-end mb-6 text-muted hover:text-white text-xl"
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
      </div>
      {/* ===== Zoomed Image Overlay ===== */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setZoomed(false)}
        >
          <img
            src={project.images[index]}
            alt={project.title}
            className="max-w-full max-h-full object-contain cursor-zoom-out"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
