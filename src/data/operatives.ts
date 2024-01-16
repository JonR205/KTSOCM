type Specialism = 'Combat' | 'Staunch' | 'Marksman' | 'Scout'
type Rank = 'Adept' | 'Veteran' | 'Ace' | 'Grizzled' | 'Revered'
export interface Operatives {
  name?: string
  type: string
  specialisms: Specialism[]
  xp: number
  rank: Rank
  battleHonours: []
  battleScars: []
  Resttally: number
  notes?: string
}
