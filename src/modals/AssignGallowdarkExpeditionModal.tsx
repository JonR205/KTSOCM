import { useRef } from 'react'
import useGallowdarkExpeditionStore from '../stores/gallowdarkExpeditionStore.ts'

interface Props {
  showModal: boolean
  onClose: () => void
  onGmClicked: () => void
}

const AssignGallowdarkExpeditionModal = (props: Props) => {
  const { showModal, onClose, onGmClicked } = props

  const isActive = showModal ? 'is-active' : ''

  const inviteCodeRef = useRef<HTMLInputElement>(null)

  const joinWithInviteCod = useGallowdarkExpeditionStore(
    (state) => state.joinWithInviteCod,
  )

  const join = () => {
    joinWithInviteCod(inviteCodeRef.current?.value ?? '')
  }

  return (
    <div className={`modal ${isActive}`} style={{ zIndex: 50 }}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className={'box has-text-centered'}>
          <div className={'content'}>
            <p className={'title is-4'}>
              Start or join a Gallowdark Expedition Campaign?
            </p>
          </div>

          <div className="buttons is-centered">
            <button className="button" onClick={onGmClicked}>
              Campaign Master
            </button>
            <button className="button" onClick={onClose}>
              Solo Player tracking
            </button>
            <div className="field has-addons">
              <input
                className="input"
                type="text"
                ref={inviteCodeRef}
                onKeyDown={(event) => event.key === 'Enter' && join()}
              />
              <button className="button" onClick={join}>
                Join a Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} />
    </div>
  )
}

export default AssignGallowdarkExpeditionModal
