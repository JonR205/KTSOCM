interface Props {
  showModal: boolean
  onClose: () => void
}

const GallowdarkExpeditionGameGuideModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  return (
    <div className={`modal ${isActive}`} style={{ zIndex: 49 }}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            Gallowdark Guide
          </p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <p>MATERIAL POINTS</p>
          <p className={'is-family-secondary'}>
            In a Gallowdark expedition, the kill teams will be attempting to
            secure three different materials:
            <span className={'has-text-weight-bold'}>
              {' '}
              Salvage, Knowledge
            </span>{' '}
            and <span className={'has-text-weight-bold'}>Resources </span>
            This is expressed as points, the total of which will determine
            commendations and the overall victor(s) at the end of the
            expedition.
          </p>
          <br />
          <p className={'is-family-secondary'}>
            At the start of a game, a location will be drawn: All players in
            that game gain 2 points of that location’s material, or 1 point of
            the material from any existing location.
          </p>
          <br />
          <p>WILD</p>
          <p className={'is-family-secondary'}>
            This is not a material. Each time a player would gain material from
            this location, they assign the points in full to a material of their
            choice instead (i.e. Salvage, Knowledge or Resources).
          </p>
          <br />
          <p >CACHES</p>
          <p className={'is-family-secondary'}>
            Each time a cache card is drawn, the players in that game compare
            their points of each material. If one player has less than the other
            in two or more materials, they gain one additional Requisition point
            for completing that game. While the opposing kill team was securing
            material in a previous game, they secured easy pickings from the
            cache!
          </p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" onClick={onClose}>
            Done
          </button>
        </footer>
      </div>
    </div>
  )
}

export default GallowdarkExpeditionGameGuideModal
