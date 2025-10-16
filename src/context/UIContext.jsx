import { createContext, useContext, useState } from 'react'

const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [toast, setToast] = useState(null)
  const showToast = (msg, type = 'info') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 2500)
  }
  return (
    <UIContext.Provider value={{ toast, showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl shadow bg-white border border-slate-200">
          <span className={`font-semibold ${toast.type === 'error' ? 'text-rose-600' : 'text-sky-700'}`}>{toast.msg}</span>
        </div>
      )}
    </UIContext.Provider>
  )
}

export const useUI = () => useContext(UIContext)
