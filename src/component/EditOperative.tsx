import { useState } from 'react'
import { Operative } from '../data/operatives'
import useDataslateStore from '../stores/dataslateStore'

interface Props {
  editOperative: Operative
}

const EditOperative = (props: Props) => {
  const { editOperative } = props
  const [name, setName] = useState(editOperative.name)
  const [type, setType] = useState(editOperative.type)
  const [specialisms, setSpecialisms] = useState(editOperative.specialisms)
  const [xp, setXp] = useState(editOperative.xp)
  const [rank, setRank] = useState(editOperative.rank)
  const [battleHonours, setBattleHonours] = useState(
    editOperative.battleHonours,
  )
  const [battleScars, setBattleScars] = useState(editOperative.battleScars)
  const [restTally, setRestTally] = useState(editOperative.restTally)
  const [notes, setNotes] = useState(editOperative.notes)

  const selectedOperatives = useDataslateStore(
    (state) => state.selectedDataslate?.operatives,
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
    const rank = operativeRankRef.current?.value ?? ''
    const battleHonours = operativeBattleHonoursRef.current?.value ?? ''
    const battleScars = operativeBattleScarsRef.current?.value ?? ''
    const restTally = operativeRestTallyRef.current?.value ?? ''
    const notes = operativeNotesRef.current?.value ?? ''

    const newOperative: Operative = {
      name: name,
      type: type,
      specialisms: [],
      xp: 0,
      rank: rank,
      battleHonours: [],
      battleScars: [],
      restTally: 0,
    }

    return(<h1>edit here</h1>)

  }
}

export default EditOperative
