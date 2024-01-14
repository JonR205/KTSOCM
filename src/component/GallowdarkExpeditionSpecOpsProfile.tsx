import AssignGallowdarkExpeditionModal from '../modals/AssignGallowdarkExpeditionModal.tsx'
import { useState } from 'react'
import NewGallowdarkExpeditionModal from '../modals/NewGallowdarkExpeditionModal.tsx'

interface Props {
  isAssigned?: boolean
}

const GallowdarkExpeditionSpecOpsProfile = (props: Props) => {
  const { isAssigned } = props

  const [showAssignModal, setShowAssignModal] = useState(false)
  const [
    showNewGallowdarkExpeditionModal,
    setShowNewGallowdarkExpeditionModal,
  ] = useState(false)

  return (
    <>
      <AssignGallowdarkExpeditionModal
        showModal={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        onGmClicked={() => {
          setShowAssignModal(false)
          setShowNewGallowdarkExpeditionModal(true)
        }}
      />
      <NewGallowdarkExpeditionModal
        showModal={showNewGallowdarkExpeditionModal}
        onClose={() => setShowNewGallowdarkExpeditionModal(false)}
      />
      <div className={'is-flex is-justify-content-space-between'}>
        <p className={'title is-5'}>Gallowdark Expedition</p>
        {!isAssigned && (
          <button
            className={'button is-small'}
            onClick={() => setShowAssignModal(true)}>
            Assign
          </button>
        )}
      </div>
      <p className={'is-italic is-family-secondary pb-3'}>
        To claim the potential treasures and relics within a space hulk, a kill
        team must be prepared to fight unknown horrors. It must endure
        inhospitable environments where decks can collapse underfoot,
        passageways can be crushed in hulk-quakes and cave-ins are common. To
        keep going, a kill team must be resourceful enough to make best use of
        the tools it can salvage, the resources it can gather and the knowledge
        it can acquire. It is impossible to fully prepare for the hardships one
        endures on an expedition into a space hulk, but for those who survive,
        the rewards can be huge.
      </p>
    </>
  )
}

export default GallowdarkExpeditionSpecOpsProfile
