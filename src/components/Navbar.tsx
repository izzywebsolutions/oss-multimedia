import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/rentals', label: 'Rentals' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur border-b border-white/5">
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="font-clash text-lg tracking-wide text-lagosgold">OSS MULTIMEDIA</Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider hover:text-lagosgold transition ${isActive ? 'text-lagosgold' : 'text-warmgray'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn btn-sm rounded-none gold-btn border-none">Book Now</Link>
        </div>

        <button className="md:hidden inline-flex items-center" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span className="i-fa-solid-bars" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-midnight">
          <div className="container-max py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm uppercase tracking-wider ${isActive ? 'text-lagosgold' : 'text-warmgray'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn rounded-none gold-btn border-none">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}
