import Navbar from '../component/Navbar.tsx'
import OperativeProfile from '../component/OperativeProfile'
import { Operative } from '../data/operatives'
import ConfirmModal from '../modals/ConfirmModal.tsx'
import { useState } from 'react'

interface Props {
  operative?: Operative
  onClose: () => void
}

const OperativeProfileModal = (props: Props) => {
  const { operative, onClose } = props
  const [showDeleteOperativeModal, setshowDeleteOperativeModal] =
    useState(false)

  console.log(showDeleteOperativeModal)

  const isActive = operative ? 'is-active' : ''

  function removeOperative(operative: Operative) {
    throw new Error('Function not implemented.')
  }

  if (!operative) return null

  return (
    <>
      <div className={`modal ${isActive}`}>
        <div className="modal-background" onClick={onClose} />
        <div className="modal-content">
          <button
            className="button is-small"
            onClick={() => setshowDeleteOperativeModal(true)}>
            Delete Operative
          </button>

          <div className={'box'}>
            <OperativeProfile operative={operative} />
          </div>
        </div>
        <button className="modal-close is-large" onClick={onClose} />
      </div>

      <ConfirmModal
        showModal={showDeleteOperativeModal}
        message={'Are you sure you want to delete operative'}
        onConfirm={() => {
          removeOperative(operative)
          // setshowDeleteOperativeModal(false)
        }}
        onClose={() => setshowDeleteOperativeModal(false)}
      />
    </>
  )
}

export default OperativeProfileModal
