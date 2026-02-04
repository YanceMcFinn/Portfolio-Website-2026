export default function Header({ section, setSection }) {
    const tabs = ["about", "graphic", "web", "contact"]
  
    return (
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Your Name</h1>
          <nav className="space-x-6 text-sm">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setSection(tab)}
                className={section === tab ? "text-accent" : "text-muted hover:text-accent"}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>
    )
  }
  