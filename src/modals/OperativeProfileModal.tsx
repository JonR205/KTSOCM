import OperativeProfile from '../component/OperativeProfile'
import { Operative } from '../data/operatives'

interface Props {
  operative?: Operative
  onClose: () => void
}

const OperativeProfileModal = (props: Props) => {
  const { operative, onClose } = props

  const isActive = operative ? 'is-active' : ''

  if (!operative) return null
  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">
        <div className={'box'}>
          <OperativeProfile operative={operative} />
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} />
    </div>
  )
}

export default OperativeProfileModal
