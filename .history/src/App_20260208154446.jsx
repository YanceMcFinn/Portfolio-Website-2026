import { useState } from "react"
import Navbar from "./components/NavBar"
import Gallery from "./components/Gallery"
import About from "./components/About"
import ProjectModal from "./components/ProjectModal"
import projects from "./data/projects"

export default function App() {
  const [page, setPage] = useState("about")
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="min-h-screen bg-zigzag text-black">
      <Navbar currentPage={page} onChange={setPage} />

      <main className="max-w-6xl mx-auto px-6 py-16 ">
        {page === "about" && (
          <About/>
        )}

        {page === "gallery" && (
          <Gallery
            projects={projects}
            onOpen={setActiveProject}
          />
        )}

        {page === "contact" && (
          <section className="max-w-xl">
            <h1 className="text-4xl font-semibold mb-6">Contact</h1>
            <p className="text-muted mb-6">
              Have a project in mind or want to work together?
            </p>
            {/* You can drop your ContactForm component here */}
          </section>
        )}
      </main>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  )
}
