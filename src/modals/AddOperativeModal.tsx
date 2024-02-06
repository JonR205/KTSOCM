import { useContext, useState } from 'react'
import { sessionContext } from '../context/sessionContext.ts'
import useDataslateStore from '../stores/dataslateStore.ts'
import { Dataslate, updateDataslate } from '../data/dataslate.ts'
import { useForm } from 'react-hook-form'
import { Operatives } from '../component/Operatives.tsx'
import { useRef } from 'react'

// type FormData = {
//   name?: string
//   type: string
//   specialisms: []
//   xp: 0
//   rank: 'Adept'
//   battleHonours: []
//   battleScars: []
//   restTally: number
//   notes?: string
// }

interface Props {
  showOperativemodal: boolean
  onClose: () => void
  dataslate?: Dataslate
}

function AddOperativeModal(props: Props) {
  const { showOperativemodal, onClose } = props

  const isActive = showOperativemodal ? 'is-active' : ''

  const saveBaseInfo = useDataslateStore((state) => state.saveBaseInfo)

  const factionOperatives = useDataslateStore(
    (state) => state.selectedDataslate?.faction.operatives,
  )

  const selectedOperatives = useDataslateStore(
    (state) => state.selectedDataslate?.operatives,
  )
  const operativeNameRef = useRef<HTMLInputElement>(null)
  const operativeTypeRef = useRef<HTMLSelectElement>(null)

  const onSave = () => {
    const name = operativeNameRef.current?.value ?? ''
    const type = operativeTypeRef.current?.value ?? ''

    saveBaseInfo(name, type)
    console.log(type)

    props.onClose()
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
          <div className="field">
            <label className="lable"> Chose Operative Type</label>
            <div className="control" />
            <div className="select">
              <select
                name="operative"
                id="op"
                defaultValue=""
                className="seletct"
                ref={operativeTypeRef}>
                <option value=""> Select From Dropdown</option>
                {factionOperatives?.map((operative, index) => (
                  <option key={index} value={operative.type}>
                    {operative.type}
                  </option>
                ))}
              </select>
            </div>
            <div className={'field'}>
              <label className="label">Operative Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  defaultValue={operativeTypeRef.current?.value}
                  ref={operativeNameRef}
                />
              </div>
            </div>

            <button className="button is-primary" onClick={onSave}>
              Submit
            </button>
            <button className="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddOperativeModal
