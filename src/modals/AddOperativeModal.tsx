import { useContext, useState } from 'react'
import { sessionContext } from '../context/sessionContext.ts'
import useDataslateStore from '../stores/dataslateStore.ts'
import { Dataslate, updateDataslate } from '../data/dataslate.ts'
import { useForm } from 'react-hook-form'
import { Operatives } from '../component/Operatives.tsx'

type FormData = {
  name?: string
  type: string
  specialisms: []
  xp: 0
  rank: 'Adept'
  battleHonours: []
  battleScars: []
  restTally: number
  notes?: string
}

interface Props {
  showOperativemodal: boolean
  onClose: () => void
  dataslate?: Dataslate
}

function AddOperativeModal(props: Props) {
  const { showOperativemodal, onClose } = props

  const isActive = showOperativemodal ? 'is-active' : ''

  const session = useContext(sessionContext)
  const updateDataslate = useDataslateStore((state) => state.addOperative)

  const factionOperatives = useDataslateStore(
    (state) => state.selectedDataslate?.faction.operatives,
  )

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({})

  const onSubmit = (data: FormData) => {
    factionOperatives?.push(data)

    onClose()
  }

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
            <div className="field">
              <label className="lable"> Chose Operative </label>
              <div className="control" />
              <div className="select">
                <select name="operative" id="op" defaultValue="">
                  <option value=""> Select From Dropdown</option>
                  {factionOperatives?.map((operative, index) => (
                    <option key={index} value={operative.type}>
                      {operative.type}
                    </option>
                  ))}
                </select>
              </div>
              <button className="button is-primary" onClick={handleSubmit}>
                Submit
              </button>
              <button className="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddOperativeModal
