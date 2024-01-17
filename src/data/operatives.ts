type Rank = 'Adept' | 'Veteran' | 'Ace' | 'Grizzled' | 'Revered'
type Specialism = 'Combat' | 'Staunch' | 'Marksman' | 'Scout'
export interface Operative {
  name?: string
  type: string
  specialisms: Specialism[]
  xp: number
  rank: Rank
  battleHonours: []
  battleScars: []
  restTally: number
  notes?: string
}
