import avatar from '../assets/avatar.jpg'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="font-[Poppins] text-3xl font-bold">About us</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
        <div className="tile">
          <div className="flex items-center gap-4">
            <img src={avatar} alt="Author" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold">Anam and Maliha</h3>
              <p className="text-slate-600 text-sm">Building accessible, real‑world travel tools.</p>
            </div>
          </div>
          <p className="mt-4 text-slate-700">Tour&Travel helps travelers plan fast with curated itineraries and smart suggestions. We care about local culture, accessible design, and joy in exploration.</p>
        </div>
        <div className="tile">
          <h4 className="font-semibold mb-2">Location</h4>
          
          <p className="text-sm text-slate-600 mt-2">Based in Lahore, Pakistan.</p>
        </div>
      </div>
    </div>
  )
}
