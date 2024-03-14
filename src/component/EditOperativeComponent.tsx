import { useRef, useState } from 'react'
import { Operative } from '../data/operatives'
import useDataslateStore from '../stores/dataslateStore'
import { Rank, Specialism } from '../data/operatives'

interface Props {
  operative: Operative
}

const EditOperativeComponent = (props: Props) => {
  const { operative } = props
  const [name, setName] = useState(operative.name)
  const [type, setType] = useState(operative.type)
  const [specialisms, setSpecialisms] = useState(operative.specialisms)
  const [xp, setXp] = useState(operative.xp)
  const [rank, setRank] = useState(operative.rank)
  const [battleHonours, setBattleHonours] = useState(operative.battleHonours)
  const [battleScars, setBattleScars] = useState(operative.battleScars)
  const [restTally, setRestTally] = useState(operative.restTally)
  const [notes, setNotes] = useState(operative.notes)

  // const selectedSpecialisms = useDataslateStore(
  //   (state) => state.selectedDataslate?.faction.,
  // )

  const specialismsList = ['Combat', 'Staunch', 'Marksman', 'Scout']

  const factionOperatives = useDataslateStore(
    (state) => state.selectedDataslate?.faction.operatives,
  )

  const operativeNameRef = useRef<HTMLInputElement>(null)
  const operativespecialismsRef = useRef<HTMLSelectElement>(null)
  const operativeXpRef = useRef<HTMLInputElement>(null)
  const operativeRankRef = useRef<HTMLSelectElement>(null)
  const operativeBattleHonoursRef = useRef<HTMLInputElement>(null)
  const operativeBattleScarsRef = useRef<HTMLSelectElement>(null)
  const operativeRestTallyRef = useRef<HTMLInputElement>(null)
  const operativeNotesRef = useRef<HTMLSelectElement>(null)

  const onSave = () => {
    const name = operativeNameRef.current?.value ?? ''
    const specialisms = operativespecialismsRef.current?.value ?? ''
    const xp = operativeXpRef.current?.value ?? ''
    const rank = operativeRankRef.current?.value ?? useState(operative.rank)
    const battleHonours = operativeBattleHonoursRef.current?.value ?? ''
    const battleScars = operativeBattleScarsRef.current?.value ?? ''
    const restTally = operativeRestTallyRef.current?.value ?? ''
    const notes = operativeNotesRef.current?.value ?? ''
  }

  const newOperative: Operative = {
    name: name,
    type: type,
    specialisms: [],
    xp: 0,
    rank: operative.rank,
    battleHonours: [],
    battleScars: [],
    restTally: 0,
  }

  return (
    <>
      <h1>Operative</h1>
      <header className="modal-card-head"></header>
      <div className={'field'}>
        <label className="label">Operative Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            defaultValue={name}
            ref={operativeNameRef}
          />
        </div>
      </div>
      <div className={'field'}>
        <label className="label">Operative specialisms</label>
        <div className="control">
          <input
            className="input"
            type="text"
            defaultValue={name}
            ref={operativeNameRef}
          />
        </div>
      </div>
      <label className="lable"> Chose Operative Type</label>
      <div className="control" />
      <div className="select">
        <select
          name="operative"
          id="op"
          defaultValue=""
          className="seletct"
          ref={operativespecialismsRef}>
          <option value=""> Select From Dropdown</option>
          {specialismsList?.map((specialisms, index) => (
            <option key={index} value={specialisms}>
              {specialisms}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default EditOperativeComponent
