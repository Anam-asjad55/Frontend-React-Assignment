import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-[Poppins] font-bold text-lg">Roamwise</h4>
          <p className="text-sm text-slate-600 mt-2">Smart, mood-based trips with local flavors, hidden gems, and live route insights.</p>
          <div className="flex gap-3 mt-3">
            <a className="btn-outline text-sm" href="#">Twitter</a>
            <a className="btn-outline text-sm" href="#">Instagram</a>
            <a className="btn-outline text-sm" href="#">GitHub</a>
          </div>
        </div>
        <div>
          <h5 className="font-semibold">Links</h5>
          <ul className="mt-2 space-y-2 text-slate-700">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Legal</h5>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Roamwise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
