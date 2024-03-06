import { useState } from 'react'
import { Operative } from '../data/operatives'

interface Props {
  editOperative?: Operative
  onClose: () => void
}

const EditOperativeProfileModal = (props: Props) => {
  const { editOperative, onClose } = props
  const [showEditOperativemodal, setShowEditOperativemodal] = useState(false)

  const isActive = editOperative ? 'is-active' : ''

  if (!editOperative) return null

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">edit info</div>
      <button className="modal-close is-large" onClick={onClose} />
    </div>
  )
}

export default EditOperativeProfileModal
