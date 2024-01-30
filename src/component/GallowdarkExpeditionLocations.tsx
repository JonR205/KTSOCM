import { GallowdarkExpedition } from '../data/gallowdarkExpedition.ts'
import useGallowdarkExpeditionStore from '../stores/gallowdarkExpeditionStore.ts'
import GallowdarkExpeditionLocationsModal from '../modals/GallowdarkExpeditionLocationsModal.tsx'
import { useState } from 'react'

interface Props {
  gallowdarkExpedition: GallowdarkExpedition
}

const GallowdarkExpeditionLocations = (props: Props) => {
  const { unexploredRooms, exploredRooms } = props.gallowdarkExpedition
  const lastLocation = exploredRooms[0]

  const drawLocation = useGallowdarkExpeditionStore(
    (state) => state.drawLocation,
  )
  const undoDrawLocation = useGallowdarkExpeditionStore(
    (state) => state.undoDrawLocation,
  )

  const [showLocations, setShowLocations] = useState(false)

  return (
    <>
      <GallowdarkExpeditionLocationsModal
        gallowdarkExpedition={props.gallowdarkExpedition}
        showModal={showLocations}
        onClose={() => setShowLocations(false)}
      />
      <div className={'is-flex is-flex-direction-column is-align-items-center'}>
        <p>Undercover locations: {unexploredRooms.length}</p>
        {lastLocation && <p>Last discovered: {lastLocation}</p>}
        <div className={'buttons'}>
          <button className="button is-small" onClick={drawLocation}>
            Draw A location
          </button>
          <button className="button is-small" onClick={undoDrawLocation}>
            Undo draw
          </button>
          <button className="button is-small" onClick={() => setShowLocations(true)}>
            Locations
          </button>
        </div>
      </div>
    </>
  )
}

export default GallowdarkExpeditionLocations
