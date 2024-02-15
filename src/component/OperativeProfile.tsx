import { Operative } from '../data/operatives'
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
}

const selectedOperatives = useDataslateStore(
  (state) => state.selectedDataslate?.operatives,
)
