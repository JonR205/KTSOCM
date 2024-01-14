import { GallowdarkExpeditionPlayer } from '../data/gallowdarkExpedition.ts'
import useGallowdarkExpeditionStore from '../stores/gallowdarkExpeditionStore.ts'

interface Props {
  player: GallowdarkExpeditionPlayer
}

const GallowdarkExpeditionPlayerProfile = (props: Props) => {
  const { teamName, knowledge, resources, salvage } = props.player

  const updatePlayer = useGallowdarkExpeditionStore(
    (state) => state.updatePlayer,
  )

  return (
    <div className="card">
      <header className="card-header is-primary">
        <p className={'card-header-title'}>{teamName}</p>
      </header>
      <div className="card-content">
        <div className={'is-flex pb-1 is-justify-content-space-between'}>
          <p className={'pr-2'}>Salvage: {salvage}</p>
          <div>
            <button
              className="button is-small"
              onClick={() =>
                updatePlayer({ ...props.player, salvage: salvage + 1 })
              }>
              +
            </button>
            <button
              className="button is-small"
              onClick={() =>
                updatePlayer({ ...props.player, salvage: salvage - 1 })
              }>
              -
            </button>
          </div>
        </div>
        <div className={'is-flex pb-1 is-justify-content-space-between'}>
          <p className={'pr-2'}>Knowledge: {knowledge}</p>
          <div>
            <button
              className="button is-small"
              onClick={() =>
                updatePlayer({ ...props.player, knowledge: knowledge + 1 })
              }>
              +
            </button>
            <button
              className="button is-small"
              onClick={() =>
                updatePlayer({ ...props.player, knowledge: knowledge - 1 })
              }>
              -
            </button>
          </div>
        </div>
        <div className={'is-flex pb-1 is-justify-content-space-between'}>
          <p className={'pr-2'}>Resources: {resources}</p>
          <div>
            <button
              className="button is-small"
              onClick={() =>
                updatePlayer({ ...props.player, resources: resources + 1 })
              }>
              +
            </button>
            <button
              className="button is-small"
              onClick={() =>
                updatePlayer({ ...props.player, resources: resources - 1 })
              }>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GallowdarkExpeditionPlayerProfile
