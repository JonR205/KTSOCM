import { useState } from 'react'
import CasualtyCheckModal from '../modals/CasualtyCheckModal'
import RecoveryTestModal from '../modals/RecoveryTestModal'
import AddOperativeModal from '../modals/AddOperativeModal'
import useDataslateStore from '../stores/dataslateStore'
import OperativeProfileModal from '../modals/OperativeProfileModal'
import { Operative } from '../data/operatives'

const Operatives = () => {
  const [showCasualtyCheckModal, setShowCasualtyCheckModal] = useState(false)
  const [showRecoveryTestModal, setRecoveryTestModal] = useState(false)
  const [showOperativemodal, setShowOperativemodal] = useState(false)
  const [showOperativeProfilemodal, setShowOperativeProfilemodal] =
    useState(false)
  const selectedDataslate = useDataslateStore(
    (state) => state.selectedDataslate,
  )
  const assignedOperatives = useDataslateStore(
    (state) => state.selectedDataslate?.operatives,
  )
  const [operativeProfile, setOperativeProfile] = useState<Operative>()

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
      <AddOperativeModal
        showOperativemodal={showOperativemodal}
        onClose={() => setShowOperativemodal(false)}
        dataslate={selectedDataslate}
      />

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
          Add Operatives
        </button>
        <div className={'box has-text-centered'}>
          <div>
            <b className="title is-5">Current Oeratives</b>
          </div>
          {assignedOperatives?.map((operative, index) => {
            return (
              <>
                <div key={index} className="column is-full is-secondary">
                  <ul
                    className={' is-size-6 pl-5'}
                    style={{ listStyleType: 'disc' }}>
                    <a onClick={() => setShowOperativeProfilemodal(true)}>
                      <li>
                        Type: {operative.type}
                        <span className="pl-2"> {operative.type}</span>
                        <br></br>
                        {operative.name && 'Name: ' + operative.name}
                        {!operative.name && 'Name: ' + operative.type}
                        <OperativeProfileModal
                          showModal={showOperativeProfilemodal}
                          operative={operative}
                          onClose={() => setShowOperativeProfilemodal(false)}
                        />
                      </li>
                    </a>
                  </ul>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Operatives
