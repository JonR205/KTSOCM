import supabaseClient from '../superbaseClient.ts'
import { ApiResponse } from './apiResponse.ts'
import SpecOps from './SpecOps.ts'

export type GallowdarkMaterials =
  | 'Salvage'
  | 'Salvage Caches'
  | 'Knowledge'
  | 'Knowledge Caches'
  | 'Resources'
  | 'Resources Caches'
  | 'Wild'
  | 'Wild Caches'

type LocationDeck = GallowdarkMaterials[]

const startingDeck: LocationDeck = [
  'Salvage',
  'Salvage',
  'Salvage',
  'Salvage',
  'Salvage',
  'Salvage',
  'Salvage',
  'Salvage',
  'Salvage',
  'Salvage Caches',
  'Salvage Caches',
  'Salvage Caches',
  'Salvage Caches',
  'Knowledge',
  'Knowledge',
  'Knowledge',
  'Knowledge',
  'Knowledge',
  'Knowledge',
  'Knowledge',
  'Knowledge',
  'Knowledge',
  'Knowledge Caches',
  'Knowledge Caches',
  'Knowledge Caches',
  'Knowledge Caches',
  'Resources',
  'Resources',
  'Resources',
  'Resources',
  'Resources',
  'Resources',
  'Resources',
  'Resources',
  'Resources',
  'Resources Caches',
  'Resources Caches',
  'Resources Caches',
  'Resources Caches',
  'Wild',
  'Wild',
  'Wild',
  'Wild',
  'Wild',
  'Wild',
  'Wild',
  'Wild',
  'Wild',
  'Wild Caches',
  'Wild Caches',
  'Wild Caches',
  'Wild Caches',
]

export interface GallowdarkExpedition {
  id: number
  gmId: number
  inviteCode: string
  hasStarted: boolean
  name: string
  currentStage: 1 | 2 | 3
  monthsPerStage?: number
  weeksPerStage?: number
  daysPerStage?: number
  gamesPerStage?: number
  gamesPlayed: number
  unexploredRooms: LocationDeck
  exploredRooms: LocationDeck
  players: GallowdarkExpeditionPlayer[]
  games: GallowdarkGame[]
}

export interface GallowdarkExpeditionPlayer {
  teamName: string
  dataslateId: number
  gamesPlayed: number
  salvage: number
  knowledge: number
  resources: number
}

export const isGallowdarkExpedition = (
  specOps: SpecOps,
): specOps is GallowdarkExpedition => {
  return (specOps as GallowdarkExpedition).currentStage !== undefined
}

interface GallowdarkGame {
  players: GallowdarkExpeditionPlayer[]
  invitedPlayers: { playerId: number; status: 'joined' | 'waiting' }[]
  material: GallowdarkMaterials
  status: 'waiting' | 'started' | 'done'
  winner: number | 'draw'
}

export function buildGallowdarkExpeditionLocation(
  gallowdarkExpedition: GallowdarkExpedition,
) {
  const { gamesPerStage } = gallowdarkExpedition
  const newStartingDeck = [...startingDeck]

  // First shuffle
  let currentIndex = newStartingDeck.length
  let randomIndex = 0

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[newStartingDeck[currentIndex], newStartingDeck[randomIndex]] = [
      newStartingDeck[randomIndex],
      newStartingDeck[currentIndex],
    ]
  }

  gallowdarkExpedition.unexploredRooms = newStartingDeck.slice(
    0,
    (gamesPerStage ?? 0) * 3,
  )
}

export const postGallowdarkExpedition = async (
  gallowdarkExpedition: GallowdarkExpedition,
): Promise<ApiResponse<GallowdarkExpedition>> => {
  buildGallowdarkExpeditionLocation(gallowdarkExpedition)

  try {
    const { data, error } = await supabaseClient
      .from('gallowdark_expedition_json')
      .insert({
        json: gallowdarkExpedition,
      })
      .select()
      .single()

    if (error) return { error: error.message }

    return {
      data: {
        ...gallowdarkExpedition,
        id: data.id,
      },
    }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}

export const getGallowdarkExpeditions = async (): Promise<
  ApiResponse<GallowdarkExpedition[]>
> => {
  try {
    const { data, error } = await supabaseClient
      .from('gallowdark_expedition_json')
      .select()

    if (error) return { error: error.message }

    return {
      data: data.map((data) => ({
        ...data.json,
        id: data.id,
      })),
    }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}

export const getGallowdarkExpedition = async (
  gallowdarkExpeditionId: number,
): Promise<ApiResponse<GallowdarkExpedition>> => {
  try {
    const { data, error } = await supabaseClient
      .from('gallowdark_expedition_json')
      .select('*')
      .eq('id', gallowdarkExpeditionId)
      .single()

    if (error) return { error: error.message }

    return { data: { ...data.json, id: data.id } }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}

export const updateGallowdarkExpedition = async (
  gallowdarkExpedition: GallowdarkExpedition,
): Promise<ApiResponse<GallowdarkExpedition>> => {
  try {
    const { data, error } = await supabaseClient
      .from('gallowdark_expedition_json')
      .update({
        json: gallowdarkExpedition,
      })
      .eq('id', gallowdarkExpedition.id)
      .select()
      .single()

    if (error) return { error: error.message }

    return { data: data.json }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}
