import { useEffect, useState } from 'react'
import GallowdarkExpeditionPlayerProfile from '../component/GallowdarkExpeditionPlayerProfile.tsx'
import useGallowdarkExpeditionStore from '../stores/gallowdarkExpeditionStore.ts'
import useDataslateStore from '../stores/dataslateStore.ts'
import GallowdarkExpeditionLocations from '../component/GallowdarkExpeditionLocations.tsx'
import GallowdarkExpeditionGameGuideModal from './GallowdarkExpeditionGameGuideModal.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const GallowdarkExpeditionPlayerModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const currentCampaign = useGallowdarkExpeditionStore(
    (state) => state.currentCampaign,
  )

  const selectedDataslateId = useDataslateStore(
    (state) => state.selectedDataslate?.id,
  )

  const [showGuideModal, setShowGuideModal] = useState(false)

  useEffect(() => {
    if (!currentCampaign) onClose()
  }, [currentCampaign, onClose])

  if (!currentCampaign) return null

  const { players, name } = currentCampaign
  const player = players.find(
    ({ dataslateId }) => dataslateId === selectedDataslateId,
  )

  if (!player) onClose()

  return (
    <>
      <GallowdarkExpeditionGameGuideModal
        showModal={showGuideModal}
        onClose={() => setShowGuideModal(false)}
      />
      <div className={`modal ${isActive} has-text-centered`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{name}</p>
            <button className="delete" onClick={onClose}></button>
          </header>
          <section className="modal-card-body">
            <div className={'pb-3'}>
              <GallowdarkExpeditionLocations
                gallowdarkExpedition={currentCampaign}
              />
            </div>
            {player && <GallowdarkExpeditionPlayerProfile player={player} />}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary" onClick={onClose}>
              Done
            </button>
            <button className="button" onClick={() => setShowGuideModal(true)}>
              Game Guide
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}

export default GallowdarkExpeditionPlayerModal
