import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import Gallery from "./components/Gallery"
import About from "./components/About"
import projects from "./data/projects"

export default function App() {
  const [page, setPage] = useState("about")
  

  return (
    <div className="min-h-screen bg-zigzag text-black">
      <Navbar currentPage={page} onChange={setPage} />

      <main className="mx-auto">
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
          <Contact />
        )}
      </main>
    </div>
  )
}
