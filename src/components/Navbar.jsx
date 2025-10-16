import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 header-glass">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Roamwise" className="h-8 w-8" />
          <span className="font-[Poppins] font-bold text-xl">Tour&Travel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Home</NavLink>
          <NavLink to="/services" className={({isActive}) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Services</NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Contact</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Dashboard</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="btn-outline">Login</Link>
          <Link to="/register" className="btn-primary">Sign up</Link>
        </div>
      </div>
    </header>
  )
}
