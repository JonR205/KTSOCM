import { useContext } from 'react'
import { sessionContext } from '../context/sessionContext.ts'
import useDataslateStore from '../stores/dataslateStore.ts'
import { Dataslate, updateDataslate } from '../data/dataslate.ts'
import { useForm } from 'react-hook-form'
import Operatives from '../component/Operatives.tsx'

interface Props {
  showOperativemodal: boolean
  onClose: () => void
  dataslate?: Dataslate

}

function AddOperativeModal(props: Props) {
  const { showOperativemodal, onClose } = props

  const isActive = showOperativemodal ? 'is-active' : ''

  return (
    <>
      <h1>Operative</h1>
      <div className={`modal ${isActive}`}>
        <button className="delete" onClick={onClose} />
        <div className="modal-background" onClick={onClose} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"> Operatives</p>
            <button className="delete" onClick={onClose}></button>
          </header>
          <form>

          </form>
        </div>
      </div>
    </>
  )
}

export default AddOperativeModal
