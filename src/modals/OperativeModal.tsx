interface Props {
  showOperativemodal: boolean
  onClose: () => void
}

const OperativeModal = (props: Props) => {
  const { showOperativemodal, onClose } = props

  const isActive = showOperativemodal ? 'is-active' : ''

  return (
    <>
      <h1>Operative</h1>
      <div className={`modal ${isActive}`}>
        <button className="delete" onClick={onClose} />
        <div className="modal-background" onClick={onClose} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"> Operatives</p>
            <button className="delete" onClick={onClose}></button>
          </header>
        </div>
      </div>
    </>
  )
}

export default OperativeModal
