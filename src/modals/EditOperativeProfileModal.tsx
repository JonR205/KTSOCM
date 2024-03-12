import { useState } from 'react'
import { Operative } from '../data/operatives'
import EditOperative from '../component/EditOperative'

interface Props {
  operative?: Operative
  onClose: () => void
}

const EditOperativeProfileModal = (props: Props) => {
  const { operative, onClose } = props
  const [showEditOperativemodal, setShowEditOperativemodal] = useState(false)
  const [operativeProfile, setOperativeProfile] = useState<Operative>()


  const isActive = operative ? 'is-active' : ''

  if (!editOperative) return null

  return (
    <EditOperative
    
    operative={operativeProfile}/>
  )
}

export default EditOperativeProfileModal
