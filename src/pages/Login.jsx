import { Link } from 'react-router-dom'

export default function Login() {
  const submit = (e) => {
    e.preventDefault()
    alert('Logged in (demo).')
  }
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="font-[Poppins] text-3xl font-bold">Login</h2>
      <form onSubmit={submit} className="tile space-y-4">
        <label className="flex flex-col">
          <span className="text-sm text-slate-600">Email</span>
          <input type="email" className="border rounded-lg px-3 py-2" required />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-slate-600">Password</span>
          <input type="password" className="border rounded-lg px-3 py-2" required />
        </label>
        <button className="btn-primary w-full">Login</button>
        <p className="text-sm text-slate-600">No account? <Link to="/register" className="text-sky-600">Register</Link></p>
      </form>
    </div>
  )
}
