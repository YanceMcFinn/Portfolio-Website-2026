export default function Navbar({ currentPage, onChange }) {
    const navItems = [
      { id: "about", label: "About" },
      { id: "gallery", label: "Gallery" },
      { id: "contact", label: "Contact" },
    ]
  
    return (
      <header className="bg-black text-white">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo / Name */}
          <span className="text-lg font-semibold tracking-tight">
            Your Name
          </span>
  
          {/* Navigation */}
          <ul className="flex gap-8 text-md">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => onChange(item.id)}
                  className={`
${
                    currentPage === item.id
                      ? "text-lime-400 font-medium"
                      : "vf transition-all hover:text-lime-400 inline-block"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
