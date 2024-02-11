import { useRef } from 'react'
import { Dataslate } from '../data/dataslate.ts'
import { Operative } from '../data/operatives.ts'
import useDataslateStore from '../stores/dataslateStore.ts'

interface Props {
  showOperativemodal: boolean
  onClose: () => void
  dataslate?: Dataslate
}

function AddOperativeModal(props: Props) {
  const { showOperativemodal, onClose } = props

  const isActive = showOperativemodal ? 'is-active' : ''

  const saveOperative = useDataslateStore((state) => state.addOperative)

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
    const newOperative: Operative = {
      name: name,
      type: type,
      specialisms: [],
      xp: 0,
      rank: 'Adept',
      battleHonours: [],
      battleScars: [],
      restTally: 0,
    }

    saveOperative(newOperative)

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
