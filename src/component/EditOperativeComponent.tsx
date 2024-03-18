import { useRef, useState } from 'react'
import { Operative } from '../data/operatives'
import useDataslateStore from '../stores/dataslateStore'
import { Rank, Specialism } from '../data/operatives'

interface Props {
  operative: Operative
}

const EditOperativeComponent = (props: Props) => {
  const { operative } = props
  const name = operative.name
  const notes = operative.notes

  const operativeNameRef = useRef<HTMLInputElement>(null)
  const operativeNotesRef = useRef<HTMLInputElement>(null)

  const onSave = () => {
    const name = operativeNameRef.current?.value ?? ''
    const notes = operativeNotesRef.current?.value ?? ''
    newOperative
  }

  const newOperative: Operative = {
    name: name,
    notes: notes,
    ...operative,
  }

  return (
    <>
      <label className="label">Operative Name</label>
      <div className="control">
        <input
          className="input"
          type="text"
          defaultValue={name}
          ref={operativeNameRef}
        />
      </div>
      <div className={'field'}>
        <label className="label">Notes</label>
        <div className="control">
          <input
            className="input"
            type="text"
            defaultValue={notes}
            ref={operativeNotesRef}
          />
        </div>
      </div>
    </>
  )
}

export default EditOperativeComponent
