import { GallowdarkExpedition } from '../data/gallowdarkExpedition.ts'

interface Props {
  showModal: boolean
  gallowdarkExpedition: GallowdarkExpedition
  onClose: () => void
}

const GallowdarkExpeditionLocationsModal = (props: Props) => {
  const { exploredRooms } = props.gallowdarkExpedition

  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  return (
    <>
      <div className={`modal ${isActive}`} style={{ zIndex: 49 }}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Discovered locations</p>
            <button className="delete" onClick={onClose}></button>
          </header>
          <section className="modal-card-body">
            {exploredRooms.length === 0 ? (
              <p>None</p>
            ) : (
              exploredRooms.map((material, index) => (
                <p key={index}>{material}</p>
              ))
            )}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary" onClick={onClose}>
              Done
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}

export default GallowdarkExpeditionLocationsModal
