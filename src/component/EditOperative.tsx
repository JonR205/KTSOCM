import { useState } from "react"
import { Operative } from "../data/operatives"


interface Props {
    editOperative: Operative
    
}

const EditOperative = (props:Props) => {
    const { editOperative } = props
    const [name, setName] = useState(editOperative.name)
    const [specialisms, setSpecialisms] = useState(editOperative.specialisms)
    const [xp, setXp] = useState(editOperative.xp)
    const [rank, setRank] = useState(editOperative.rank)
    const [battleHonours, setBattleHonours] = useState(editOperative.battleHonours)
    const [battleScars, setBattleScars] = useState(editOperative.battleScars)
    const [restTally, setRestTally] = useState(editOperative.restTally)
    const [notes, setNotes] = useState(editOperative.notes)

}

export default EditOperative



