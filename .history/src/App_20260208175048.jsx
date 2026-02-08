import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Contact from "./components/Contact";

export default function App() {
  const [page, setPage] = useState("about")
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="min-h-screen bg-zigzag text-black">
      <Navbar currentPage={page} onChange={setPage} />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
