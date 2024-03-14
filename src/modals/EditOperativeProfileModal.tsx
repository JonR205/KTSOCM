import { useState } from 'react'
import { Operative } from '../data/operatives'
import EditOperativeComponent from '../component/EditOperativeComponent'
import { Rank } from '../data/operatives'

interface Props {
  operative?: Operative
  onClose: () => void
}

const EditOperativeProfileModal = (props: Props) => {
  const { operative, onClose } = props
  const [showEditOperativemodal, setShowEditOperativemodal] = useState(false)
  const [operativeProfile, setOperativeProfile] = useState<Operative>()

  const isActive = operative ? 'is-active' : ''

  if (!operative) return null

  return (
    <div>
      <div className={`modal ${isActive}`}>
        <div className="modal-background" onClick={onClose} />
        <div className="modal-content">
          <EditOperativeComponent operative={operative} />
        </div>
      </div>
    </div>
  )
}

export default EditOperativeProfileModal
