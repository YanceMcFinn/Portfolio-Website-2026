import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Gallery from "./components/Gallery"
import About from "./components/About"
import Contact from "./components/Contact";


export default function App() {
  const [page, setPage] = useState("about")
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="w-screen h-screen text-black">
      <Navbar currentPage={page} onChange={setPage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
