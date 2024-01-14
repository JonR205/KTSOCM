import useDataslateStore from '../stores/dataslateStore.ts'
import { genericSpecOps } from '../data/specOp.ts'
import SpecOpsProfile from '../component/SpecOpsProfile.tsx'
import GallowdarkExpeditionSpecOpsProfile from '../component/GallowdarkExpeditionSpecOpsProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const PickASpecOpsModal = (props: Props) => {
  const { showModal, onClose } = props
  const isActive = showModal ? 'is-active' : ''

  const currentSpecOps = useDataslateStore(
    (state) => state.selectedDataslate?.currentSpecOps,
  )

  if (currentSpecOps) return null

  return (
    <>
      <div className={`modal ${isActive}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Spec Ops</p>
            <button className="delete" onClick={onClose}></button>
          </header>
          <section className="modal-card-body">
            <GallowdarkExpeditionSpecOpsProfile />
            {genericSpecOps.map((specOp, index) => (
              <SpecOpsProfile specOp={specOp} key={index} />
            ))}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary" onClick={onClose}>
              Done
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}

export default PickASpecOpsModal
