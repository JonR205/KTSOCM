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
        <button className="delete" onClick={onClose} />
        <div className="modal-background" onClick={onClose} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"> Operative </p>
          </header>
          <section className="modal-card-body">
            <EditOperativeComponent operative={operative} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default EditOperativeProfileModal
