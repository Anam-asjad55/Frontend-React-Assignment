import { useState } from 'react'
import { useJourney } from '../context/JourneyContext'
import { useUI } from '../context/UIContext'
import { haversineDistance } from '../utils/haversine'

export default function MapRoutePicker() {
  const defaultStart = { lat: 31.520, lng: 74.358 } // Lahore
  const defaultEnd = { lat: 35.297, lng: 75.633 }   // Skardu
  const defaultRate = 35

  const [start, setStart] = useState(defaultStart)
  const [end, setEnd] = useState(defaultEnd)
  const [rate, setRate] = useState(defaultRate)

  const { setRoute, addStep, clearRoute } = useJourney()
  const { showToast } = useUI()

  const distanceKm = haversineDistance(start, end)
  const cost = Math.round(distanceKm * Math.max(0, rate))

  const save = () => {
    const r = {
      start, end,
      distanceKm: Number(distanceKm.toFixed(2)),
      rate,
      cost
    }
    setRoute(r)
    addStep('route_set', r)
    showToast('Route saved')
  }

  const reset = () => {
    setStart(defaultStart)
    setEnd(defaultEnd)
    setRate(defaultRate)
    clearRoute()
    addStep('route_reset', { ts: Date.now() })
    showToast('Route reset')
  }

  return (
    <div className="tile">
      <h4 className="font-semibold mb-3">Choose route (lat/lng)</h4>
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="tile p-3">
          <span className="text-sm text-slate-600">Start</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input className="border rounded-lg px-3 py-2" type="number" value={start.lat} onChange={e=>setStart(s=>({ ...s, lat: Number(e.target.value) }))} />
            <input className="border rounded-lg px-3 py-2" type="number" value={start.lng} onChange={e=>setStart(s=>({ ...s, lng: Number(e.target.value) }))} />
          </div>
        </div>
        <div className="tile p-3">
          <span className="text-sm text-slate-600">End</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input className="border rounded-lg px-3 py-2" type="number" value={end.lat} onChange={e=>setEnd(s=>({ ...s, lat: Number(e.target.value) }))} />
            <input className="border rounded-lg px-3 py-2" type="number" value={end.lng} onChange={e=>setEnd(s=>({ ...s, lng: Number(e.target.value) }))} />
          </div>
        </div>
        <div className="tile p-3">
          <span className="text-sm text-slate-600">Rate (PKR/km)</span>
          <input className="border rounded-lg px-3 py-2 mt-2 w-full" type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} />
          <div className="mt-3 text-sm">
            <div><span className="font-semibold">Distance:</span> {distanceKm.toFixed(1)} km</div>
            <div><span className="font-semibold">Cost:</span> PKR {cost}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="btn-primary" onClick={save}>Save route</button>
        <button className="btn-outline" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
