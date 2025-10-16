import { weekendItineraries } from '../data/itineraries'
import { snacksByCity } from '../data/snacks'
import { trips } from '../data/trips'
import MoodPicker from '../components/MoodPicker'
import SnackCard from '../components/SnackCard'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

export default function Services() {
  // Replace 'Romantic' -> 'Scenic' for display
  const displayTrips = trips.map(t => ({
    ...t,
    tag: t.tag === 'Romantic' ? 'Scenic' : t.tag
  }))

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="font-[Poppins] text-3xl font-bold">Services</h2>

      {/* One‑Click Weekend Itineraries */}
      <section id="weekend" className="mt-6 grid md:grid-cols-2 gap-6">
        {weekendItineraries.map(it => (
          <div key={it.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow">
            <img src={it.cover} alt={it.city} className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-xl">{it.city} — {it.days} days</h3>
              <p className="text-slate-700">{it.summary}</p>
              <ul className="mt-3 text-sm space-y-1">
                {it.plan.map(p => (
                  <li key={p.day} className="border-b border-slate-200 pb-1">
                    <span className="font-semibold">Day {p.day}:</span> {p.items.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      
      {/* Popular Trips (discoverable plans) */}
      <section id="trips" className="mt-10">
        <div className="flex items-end justify-between">
          <h3 className="font-semibold text-xl">Popular Trips</h3>
          <Link to="/" className="text-sm text-sky-600 hover:underline">Back to Home</Link>
        </div>
        <p className="text-slate-700 mt-1">Explore curated trips and open a detailed plan for each destination.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {displayTrips.map(t => (
            <article key={t.id} className="relative group overflow-hidden rounded-2xl shadow">
              <img src={t.img} alt={t.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">{t.title}</h4>
                <span className="text-xs bg-sky-500 px-2 py-1 rounded">{t.tag}</span>
              </div>
              <Link
                to={`/trip/${t.id}`}
                className="absolute bottom-4 right-4 btn-primary opacity-0 group-hover:opacity-100 transition"
                aria-label={`Discover ${t.title}`}
              >
                Discover
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Local Snack Finder */}
      <section id="snacks" className="mt-10">
        <h3 className="font-semibold text-xl mb-3">Local Snack Finder</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(snacksByCity).map(([city, snacks]) => (
            <div key={city} className="tile">
              <h4 className="font-semibold">{city}</h4>
              <div className="mt-3 grid gap-3">
                {snacks.map((s, i) => <SnackCard key={i} snack={s} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
