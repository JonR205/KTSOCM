import useDataslateStore from '../stores/dataslateStore.ts'
import OperationName from './OperationName.tsx'
import { isGallowdarkExpedition } from '../data/gallowdarkExpedition.ts'
import GallowdarkExpeditionGMModal from '../modals/GallowdarkExpeditionGMModal.tsx'
import { useState } from 'react'
import GallowdarkExpeditionPlayerModal from '../modals/GallowdarkExpeditionPlayerModal.tsx'
import SpecOps from '../data/SpecOps.ts'
import PickASpecOpsModal from '../modals/PickASpecOpsModal.tsx'
import SpecOpsModal from '../modals/SpecOpsModal.tsx'

const CurrentSpecOpsCard = () => {
  const currentSpecOps = useDataslateStore(
    (state) => state.selectedDataslate?.currentSpecOps,
  )
  const selectedDataslate = useDataslateStore(
    (state) => state.selectedDataslate,
  )
  const completedSpecOps =
    useDataslateStore((state) => state.selectedDataslate?.completedSpecOps) ??
    []

  const [showSpecOpsModal, setShowSpecOpsModal] = useState(false)
  const [showPickSpecOpsModal, setShowPickSpecOpsModal] = useState(false)
  const [showGmModal, setShowGmModal] = useState(false)

  if (!currentSpecOps)
    return (
      <>
        <PickASpecOpsModal
          showModal={showPickSpecOpsModal}
          onClose={() => setShowPickSpecOpsModal(false)}
        />
        <a className={'box has-text-centered'} onClick={() => setShowPickSpecOpsModal(true)}>
          <p className="title is-5">Assign Kill Team to a Spec Ops!</p>
          <SpecOpsLog completedSpecOps={completedSpecOps} />
        </a>
      </>
    )

  if (isGallowdarkExpedition(currentSpecOps)) {
    const { name, currentStage, gamesPlayed, gmId } = currentSpecOps

    if (gmId === selectedDataslate?.id) {
      return (
        <>
          <GallowdarkExpeditionGMModal
            showModal={showGmModal}
            onClose={() => setShowGmModal(false)}
          />
          <a className={'box has-text-centered'} onClick={() => setShowGmModal(true)}>
            <p className={'is-size-6 has-text-weight-bold'}>{name}</p>
            <p className={'is-size-6 has-text-weight-bold'}>
              Stage: {currentStage}
            </p>
            <p className={'is-size-6 has-text-weight-bold'}>
              Games Plays: {gamesPlayed}
            </p>
            <></>
          </a>
        </>
      )
    }

    return (
      <>
        <GallowdarkExpeditionPlayerModal
          showModal={showGmModal}
          onClose={() => setShowGmModal(false)}
        />
        <a className={'box has-text-centered'} onClick={() => setShowGmModal(true)}>
          <p className={'is-size-6 has-text-weight-bold'}>{name}</p>
          <p className={'is-size-6 has-text-weight-bold'}>
            Stage: {currentStage}
          </p>
          <p className={'is-size-6 has-text-weight-bold'}>
            Games Plays: {gamesPlayed}
          </p>
          <></>
        </a>
      </>
    )
  }

  const { name, operationOne, operationTwo } = currentSpecOps

  return (
    <>
      <SpecOpsModal
        showModal={showSpecOpsModal}
        onClose={() => setShowSpecOpsModal(false)}
      />
      <a className={'box has-text-centered'} onClick={() => setShowSpecOpsModal(true)}>
        <p className={'is-size-6 has-text-weight-bold'}>{name}</p>
        {!operationOne.complete && (
          <OperationName operation={operationOne} showCompletion={true} />
        )}
        {operationOne.complete && !operationTwo.complete && (
          <OperationName operation={operationTwo} showCompletion={true} />
        )}
        {operationOne.complete && operationTwo.complete && (
          <p className={'is-size-6 has-text-weight-bold'}>Complete!</p>
        )}
        <SpecOpsLog completedSpecOps={completedSpecOps} />
      </a>
    </>
  )
}

interface SpecOpsLogProps {
  completedSpecOps: Array<SpecOps>
}

const SpecOpsLog = (props: SpecOpsLogProps) => {
  const { completedSpecOps } = props

  return (
    <>
      {completedSpecOps?.map(({ name }, index) => (
        <p
          className={'is-size-6 has-text-weight-bold has-text-grey-lighter'}
          key={index}>
          {name}
        </p>
      ))}
    </>
  )
}

export default CurrentSpecOpsCard
