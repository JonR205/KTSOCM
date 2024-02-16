import { Operative } from '../data/operatives'

interface Props {
  showModal: boolean
  operative?: Operative
  onClose: () => void
}

const OperativeProfileModal = (props: Props) => {
  const { showModal, onClose, operative } = props

  const isActive = showModal ? 'is-active' : ''

  if (!operative) return null
  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">
        <div className={'box'}>
          {/* <OperativeProfile operative={operative} /> */}
          Insert profile here
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} />
    </div>
  )
}

export default OperativeProfileModal
