import { Operative } from '../data/operatives'
import { operativeAssigned } from '../data/requisition.ts'
import useDataslateStore from '../stores/dataslateStore.ts'

interface Props {
  operative: Operative
}

const OperativeProfile = (props: Props) => {
  const { operative } = props
  const {
    type,
    name,
    specialisms,
    xp,
    rank,
    battleHonours,
    battleScars,
    restTally,
    notes,
  } = operative

  return (
    <>
      <div>Type: {type}</div>
      <div>Name: {name} </div>
      <div>Specialisms: {specialisms}</div>
      <div>XP: {xp}</div>
      <div>Rank: {rank}</div>
      <div>Battle Honours: {battleHonours}</div>
      <div>Battle Scars: {battleScars}</div>
      <div>Rest Tally: {restTally}</div>
      <div>Notes: {notes}</div>
    </>
  )
}

export default OperativeProfile
