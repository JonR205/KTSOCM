import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { sessionContext } from './context/sessionContext'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import Dataslate from './pages/Dataslate'
import NewDataslate from './pages/NewDataslate'
import supabaseClient from './superbaseClient'
import useSystemError from './stores/systemError.ts'
import useDataslateStore from './stores/dataslateStore.ts'
import DataslateCard from './component/DataslateCard.tsx'

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const error = useSystemError((state) => state.error)
  const resetError = useSystemError((state) => state.resetError)
  const dataslates = useDataslateStore((state) => state.dataslates)
  const getDataslates = useDataslateStore((state) => state.getDataslates)

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    getDataslates()
    
    const newestDataslate = () => {
      dataslates?.sort((a, b) => {
        return b.id - a.id
      })[0].id
    }
    window.location.href = `/dataslate/${newestDataslate}`

    console.log(newestDataslate)

    return () => subscription.unsubscribe()
  }, [])

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
              <a className="navbar-item" href={'/dashboard'}>
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
        {error && (
          <div style={{ padding: '10px' }}>
            <div className="notification is-danger">
              <button className="delete" onClick={resetError}></button>
              {error}
            </div>
          </div>
        )}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/new-dataslate" element={<NewDataslate />} />
            <Route path="/dataslate/:dataslateId" element={<Dataslate />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </sessionContext.Provider>
    )
  }
}

export default App
