import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { sessionContext } from './context/sessionContext'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import Dataslate from './pages/Dataslate'
import NewDataslate from './pages/NewDataslate'
import supabaseClient from './superbaseClient'

function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  console.log('Session: ' + session)
  if (!session) {
    return <Authentication />
  } else {
    return (
      <sessionContext.Provider value={session}>
        <nav className="navbar is-dark">
          <a className="navbar-burger" data-target="navbarMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href={'/'}>
                Dashboard
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <button
                  className="button"
                  onClick={() => supabaseClient.auth.signOut()}>
                  Log out
                </button>
              </div>
            </div>
          </div>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/new-dataslate" element={<NewDataslate />} />
            <Route path="/dataslate/:dataslateId" element={<Dataslate />} />
          </Routes>
        </BrowserRouter>
      </sessionContext.Provider>
    )
  }
}

export default App
