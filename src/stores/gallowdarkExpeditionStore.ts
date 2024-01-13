import { create } from 'zustand'
import {
  GallowdarkExpedition,
  GallowdarkExpeditionPlayer,
  getGallowdarkExpeditions,
  postGallowdarkExpedition,
  updateGallowdarkExpedition,
} from '../data/gallowdarkExpedition.ts'
import useSystemError from './systemError.ts'
import useDataslateStore from './dataslateStore.ts'

export interface GallowdarkExpeditionState {
  currentCampaign?: GallowdarkExpedition

  createCampaign: (
    name: string,
    players: string[],
    gamesPerStage?: number,
    months?: number,
    weeks?: number,
    days?: number,
  ) => void
  joinWithInviteCod: (inviteCode: string) => void
  moveToNextStage: () => void
  moveStageBack: () => void
  ingressGamesPlayed: () => void
  decreesGamesPlayed: () => void
  updatePlayer: (player: GallowdarkExpeditionPlayer) => void
  drawLocation: () => void
  undoDrawLocation: () => void
}

const setError = useSystemError.getState().setError

const saveGallowdarkExpedition = (
  newGallowdarkExpedition: GallowdarkExpedition,
  set: (
    gallowdarkExpeditionState:
      | GallowdarkExpeditionState
      | Partial<GallowdarkExpeditionState>,
  ) => void,
) => {
  async function call() {
    const { data, error } = await updateGallowdarkExpedition(
      newGallowdarkExpedition,
    )
    if (error) setError(error)
    if (!data) return
    set({ currentCampaign: data })
    const selectedDataslate = useDataslateStore.getState().selectedDataslate
    if (selectedDataslate)
      useDataslateStore.setState({
        selectedDataslate: {
          ...selectedDataslate,
          currentSpecOps: data,
        },
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  call()
}

const useGallowdarkExpeditionStore = create<GallowdarkExpeditionState>(
  (setState, getState) => ({
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createCampaign: async (
      name,
      players,
      gamesPerStage,
      months,
      weeks,
      days,
    ) => {
      const dataslateId =
        useDataslateStore.getState().selectedDataslate?.id ?? -1
      const teamName =
        useDataslateStore.getState().selectedDataslate?.teamName ?? ''

      const playersByName: GallowdarkExpeditionPlayer[] = players.map(
        (player) => ({
          teamName: `${player}'s Team`,
          dataslateId: -1,
          currentStage: 1,
          gamesPlayed: 0,
          salvage: 0,
          knowledge: 0,
          resources: 0,
        }),
      )

      const gallowdarkExpedition: GallowdarkExpedition = {
        id: 0,
        gmId: dataslateId,
        inviteCode: Math.random().toString(36).substring(2, 9),
        hasStarted: false,
        name,
        currentStage: 1,
        monthsPerStage: months,
        weeksPerStage: weeks,
        daysPerStage: days,
        gamesPerStage,
        gamesPlayed: 0,
        unexploredRooms: [],
        exploredRooms: [],
        players: [
          ...playersByName,
          {
            teamName,
            dataslateId,
            gamesPlayed: 0,
            salvage: 0,
            knowledge: 0,
            resources: 0,
          },
        ],
        games: [],
      }

      const { data, error } =
        await postGallowdarkExpedition(gallowdarkExpedition)

      if (error) useSystemError.getState().setError(error)
      if (data) {
        setState({ currentCampaign: data })
        useDataslateStore.getState().assignSpecOps(data)
      }
    },

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    joinWithInviteCod: async (inviteCode) => {
      const { data, error } = await getGallowdarkExpeditions()

      if (error) setError(error)
      if (!data) return

      const campaign = data.find(
        (campaign) => campaign.inviteCode === inviteCode,
      )
      if (!campaign) {
        setError('Invalid code')
        return
      }

      const dataslateId =
        useDataslateStore.getState().selectedDataslate?.id ?? -1
      const teamName =
        useDataslateStore.getState().selectedDataslate?.teamName ?? ''

      campaign.players.push({
        teamName,
        dataslateId,
        gamesPlayed: 0,
        salvage: 0,
        knowledge: 0,
        resources: 0,
      })

      saveGallowdarkExpedition(campaign, setState)
      useDataslateStore.getState().assignSpecOps(campaign)
    },

    moveToNextStage: () => {
      const currentCampaign = getState().currentCampaign
      if (!currentCampaign || currentCampaign?.currentStage === 3) return

      const newCurrentCampaign = { ...currentCampaign }

      newCurrentCampaign.currentStage++

      saveGallowdarkExpedition(newCurrentCampaign, setState)
    },

    moveStageBack: () => {
      const currentCampaign = getState().currentCampaign
      if (!currentCampaign || currentCampaign?.currentStage === 1) return

      const newCurrentCampaign = { ...currentCampaign }

      newCurrentCampaign.currentStage--

      saveGallowdarkExpedition(newCurrentCampaign, setState)
    },

    ingressGamesPlayed: () => {
      const currentCampaign = getState().currentCampaign
      if (!currentCampaign) return

      const newCurrentCampaign = { ...currentCampaign }

      newCurrentCampaign.gamesPlayed++

      saveGallowdarkExpedition(newCurrentCampaign, setState)
    },

    decreesGamesPlayed: () => {
      const currentCampaign = getState().currentCampaign
      if (!currentCampaign || currentCampaign.gamesPlayed === 0) return

      const newCurrentCampaign = { ...currentCampaign }

      newCurrentCampaign.gamesPlayed--

      saveGallowdarkExpedition(newCurrentCampaign, setState)
    },

    updatePlayer: (player) => {
      const currentCampaign = getState().currentCampaign
      if (!currentCampaign) return

      const playerIndex = currentCampaign.players.findIndex(
        ({ teamName }) => teamName === player.teamName,
      )

      if (playerIndex === -1) return

      const newCurrentCampaign = { ...currentCampaign }

      newCurrentCampaign.players[playerIndex] = player

      saveGallowdarkExpedition(newCurrentCampaign, setState)
    },

    drawLocation: () => {
      const currentCampaign = getState().currentCampaign
      if (!currentCampaign) return
      if (currentCampaign.unexploredRooms.length < 1) return
      const newCurrentCampaign = { ...currentCampaign }

      const location = newCurrentCampaign.unexploredRooms.shift()
      if (location) newCurrentCampaign.exploredRooms.unshift(location)
      newCurrentCampaign.gamesPlayed++

      saveGallowdarkExpedition(newCurrentCampaign, setState)
    },

    undoDrawLocation: () => {
      const currentCampaign = getState().currentCampaign
      if (!currentCampaign) return
      if (currentCampaign.unexploredRooms.length < 1) return
      const newCurrentCampaign = { ...currentCampaign }

      const location = newCurrentCampaign.exploredRooms.shift()
      if (location) newCurrentCampaign.unexploredRooms.unshift(location)
      newCurrentCampaign.gamesPlayed--

      saveGallowdarkExpedition(newCurrentCampaign, setState)
    },
  }),
)

export default useGallowdarkExpeditionStore
