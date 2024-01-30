import { useEffect, useState } from 'react'
import GallowdarkExpeditionPlayerProfile from '../component/GallowdarkExpeditionPlayerProfile.tsx'
import useGallowdarkExpeditionStore from '../stores/gallowdarkExpeditionStore.ts'
import GallowdarkExpeditionLocations from '../component/GallowdarkExpeditionLocations.tsx'
import GallowdarkExpeditionGameGuideModal from './GallowdarkExpeditionGameGuideModal.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const GallowdarkExpeditionGMModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const currentCampaign = useGallowdarkExpeditionStore(
    (state) => state.currentCampaign,
  )

  const moveToNextStage = useGallowdarkExpeditionStore(
    (state) => state.moveToNextStage,
  )
  const moveStageBack = useGallowdarkExpeditionStore(
    (state) => state.moveStageBack,
  )
  const ingressGamesPlayed = useGallowdarkExpeditionStore(
    (state) => state.ingressGamesPlayed,
  )
  const decreesGamesPlayed = useGallowdarkExpeditionStore(
    (state) => state.decreesGamesPlayed,
  )

  const [showGuideModal, setShowGuideModal] = useState(false)

  useEffect(() => {
    if (!currentCampaign) onClose()
  }, [currentCampaign, onClose])

  if (!currentCampaign) return null

  const { name, currentStage, gamesPlayed, players, inviteCode, hasStarted } =
    currentCampaign

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
            {!hasStarted && `Invite code: ${inviteCode}`}
            <div className={'is-flex is-justify-content-space-around pb-4'}>
              <div>
                <p className={'title'}>Stage: {currentStage}</p>
                <p className={'subtitle'}>
                  Games played: {gamesPlayed}
                  {'  '}
                  <button
                    className="button is-small"
                    onClick={ingressGamesPlayed}>
                    +
                  </button>
                  <button
                    className="button is-small"
                    onClick={decreesGamesPlayed}>
                    -
                  </button>
                </p>
              </div>
              <GallowdarkExpeditionLocations
                gallowdarkExpedition={currentCampaign}
              />
            </div>
            <div className="columns is-multiline">
              {players.map((player, index) => (
                <div className={'column is-half'} key={index}>
                  <GallowdarkExpeditionPlayerProfile player={player} />
                </div>
              ))}
            </div>
          </section>
          <footer className="modal-card-foot">
            <div className={'buttons'}>
              <button className="button is-primary" onClick={onClose}>
                Done
              </button>
              {currentStage !== 1 && (
                <button className="button" onClick={moveStageBack}>
                  Move stage back
                </button>
              )}
              {currentStage !== 3 && (
                <button className="button" onClick={moveToNextStage}>
                  Move to next stage
                </button>
              )}
              <button
                className="button"
                onClick={() => setShowGuideModal(true)}>
                Game Guide
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default GallowdarkExpeditionGMModal
