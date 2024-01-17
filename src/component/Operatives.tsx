import { useState } from 'react'
import CasualtyCheckModal from '../modals/CasualtyCheckModal'
import RecoveryTestModal from '../modals/RecoveryTestModal'
import OperativeModal from '../modals/OperativeModal'

const Operatives = () => {
  const [showCasualtyCheckModal, setShowCasualtyCheckModal] = useState(false)
  const [showRecoveryTestModal, setRecoveryTestModal] = useState(false)
  const [showOperativemodal, setShowOperativemodal] = useState(false)

  return (
    <>
      <CasualtyCheckModal
        showModal={showCasualtyCheckModal}
        onClose={() => setShowCasualtyCheckModal(false)}
        showRecoveryTestModal={() => setRecoveryTestModal(true)}
      />
      <RecoveryTestModal
        showRecoveryTestModal={showRecoveryTestModal}
        onClose={() => setRecoveryTestModal(false)}
      />
      <OperativeModal
        showOperativemodal={showOperativemodal}
        onClose={() => setShowOperativemodal(false)}
      />
      showOperativemodal
      <div className={'buttons'}>
        <button
          className={'button'}
          onClick={() => setShowCasualtyCheckModal(true)}>
          Casualty Test
        </button>
        <button className={'button'} onClick={() => setRecoveryTestModal(true)}>
          Recovery Test
        </button>
        <button
          className={'button'}
          onClick={() => setShowOperativemodal(true)}>
          Operatives
        </button>
      </div>
    </>
  )
}

export default Operatives
