import { useRef, useState } from 'react'
import useGallowdarkExpeditionStore from '../stores/gallowdarkExpeditionStore.ts'

interface Props {
  showModal: boolean
  onClose: () => void
}

const NewGallowdarkExpeditionModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const nameRef = useRef<HTMLInputElement>(null)
  const gamesRef = useRef<HTMLInputElement>(null)
  const monthsRef = useRef<HTMLInputElement>(null)
  const weeksRef = useRef<HTMLInputElement>(null)
  const daysRef = useRef<HTMLInputElement>(null)
  const playersRef = useRef<HTMLInputElement>(null)

  const [players, setPlayers] = useState<string[]>([])
  const [nameError, setNameError] = useState(false)

  const createCampaign = useGallowdarkExpeditionStore(
    (state) => state.createCampaign,
  )

  const onCreate = () => {
    const name = nameRef?.current?.value
    if (!name) {
      setNameError(true)
      return
    }

    const games = gamesRef?.current?.value
      ? Number(gamesRef?.current?.value)
      : undefined
    const months = monthsRef?.current?.value
      ? Number(monthsRef?.current?.value)
      : undefined
    const weeks = weeksRef?.current?.value
      ? Number(weeksRef?.current?.value)
      : undefined
    const days = daysRef?.current?.value
      ? Number(daysRef?.current?.value)
      : undefined

    createCampaign(name, players, games, months, weeks, days)
  }

  const addPlayer = () => {
    const player = playersRef.current?.value
    if (!player) return

    setPlayers((prevState) => [...prevState, player])
    playersRef.current.value = ''
  }

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Start a Gallowdark Expedition</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name of your campaign</label>
            <div className="control">
              <input className="input" type="text" ref={nameRef} />
            </div>
            {nameError && (
              <p className="help is-danger">This field is required</p>
            )}
          </div>

          <div className="field">
            <label className="label">Games per stage</label>
            <div className="control">
              <input className="input" type="number" ref={gamesRef} />
            </div>
          </div>

          <label className="label">Stage length</label>
          <div className="field is-grouped">
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Months"
                ref={monthsRef}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Weeks"
                ref={weeksRef}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Days"
                ref={daysRef}
              />
            </div>
          </div>

          <label className="label">Players</label>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                ref={playersRef}
                onKeyDown={(event) => event.key === 'Enter' && addPlayer()}
              />
            </div>
            <div className="control">
              <a className="button" onClick={addPlayer}>
                Add
              </a>
            </div>
          </div>

          {players.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </section>
        <footer className="modal-card-foot">
          <div className={'buttons'}>
            <button className="button is-primary" onClick={onCreate}>
              Create
            </button>
            <button className="button" onClick={onClose}>
              Close
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default NewGallowdarkExpeditionModal
