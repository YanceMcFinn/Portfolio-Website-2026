export default function Navbar({ currentPage, onChange }) {
    const navItems = [
      { id: "about", label: "ABOUT" },
      { id: "gallery", label: "GALLERY" },
      { id: "contact", label: "CONTACT" },
    ]
  
    return (
      <header className="bg-black text-white">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo / Name */}
          <img
          src="/images/assets/SCDesign_Logo_2026_White.svg"
          alt="Sean Cole Design"
          className="h-8 w-auto"
        />
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
