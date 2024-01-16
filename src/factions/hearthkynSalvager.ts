import { Operatives } from './../data/operatives'
import { Faction } from '../data/faction.ts'
import { Requisition } from '../data/requisition.ts'
import { StrategicAssets } from '../data/strategicAssets.ts'
import { Gear, Weapon } from '../data/equipment.ts'
import { blast, indirect, lethal, limited, rng } from '../data/specialRules.ts'

// Equipment
export const graviticConcussionGrenade: Weapon = {
  id: 0,
  name: 'Gravitic concussion grenade',
  description:
    'The operative is equipped with the following ranged weapon for the battle:',
  type: 'range',
  cost: 2,
  attacks: 4,
  ballisticsSkills: 3,
  normalDamage: 2,
  criticalDamage: 4,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('6"'), blast('2"'), indirect, limited],
}

export const plasmaKnife: Weapon = {
  id: 0,
  name: 'Plasma knife',
  description:
    'The operative is equipped with the following melee weapon for the battle:',
  cost: 2,
  type: 'melee',
  attacks: 4,
  ballisticsSkills: 4,
  normalDamage: 3,
  criticalDamage: 5,
  rare: false,
  criticalHitRules: [],
  specialRules: [lethal(5)],
}

export const climbingEquipment: Gear = {
  id: 0,
  name: 'Climbing Equipment',
  description: 'The operative gains the following ability for the battle:',
  cost: 1,
  ability:
    `Each time this operative ascends or descends a terrain feature while climbing, the first vertical distance of up to 3 2" it travels are counted as 2" for that climb.` +
    '\n' +
    `This operative does not need to be within 1" of a physical and climbable part of a terrain feature in order to climb it. Each time this operative drops, the intended location can be any vertical distance from the level it occupies.` +
    '\n' +
    'Each time this operative drops, it counts any vertical distance it travels as half for that drop.',
  rare: false,
}

export const weavefieldCrest: Gear = {
  id: 0,
  name: 'Weavefield Crest',
  description:
    'THEYN operative only. The operative gains the following ability for the battle:',
  cost: 3,
  ability: `While a friendly HEARTHKYN SALVAGER operative is within 3" of this operative, that operative has a 4+ invulnerable save.`,
  rare: false,
}

export const excavationTool: Gear = {
  id: 0,
  name: 'Excavation Tool',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability: `At the end of the Set Up Barricades step, place one of your Clearance tokens within 1" of a part of a terrain feature with the Traversable trait and more than 6 inces from your opponent’s drop zone. Until the end of the battle, friendly operatives do not have to traverse that terrain feature; they can move through it as if it were not there, so long as they do so within 1" of that token. Note that they cannot finish the move on that terrain feature. You can select this item of equipment no more than three times for the battle.`,
  rare: false,
}

export const autoCalibrator: Gear = {
  id: 0,
  name: 'Auto-Calibrator',
  description:
    'Select one of the operative’s ranged weapons. Each time the operative makes a shooting attack with that weapon during the battle, you can ignore any or all modifiers to its Ballistic Skill characteristic.',
  cost: 1,
  ability: '',
  rare: false,
}

// Rare Equipment
export const aGrudgeDeclared: Gear = {
  id: 0,
  name: 'A Grudge Declared',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Once during the battle, in the Strategy phase, when it’s your turn to use a Strategic Ploy or pass, you can instead select one enemy operative to gain a Grudge token.',
  rare: true,
}

export const darkstarWeapon: Gear = {
  id: 0,
  name: 'Darkstar Weapon',
  description: '',
  cost: 2,
  ability:
    'Select one of the operative’s melee weapons. Until the end of the battle, that weapon gains the Rending critical hit rule.',
  rare: true,
}

export const relicPlate: Gear = {
  id: 0,
  name: 'Relic Plate',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Each time a shooting attack is made against this operative, in the Roll Defence Dice step of that shooting attack, you can re-roll one of your defence dice.',
  rare: true,
}

export const rightOfClaim: Gear = {
  id: 0,
  name: 'Right of Claim',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability: `While this operative is within 2" of an objective marker, add 1 to its Defence characteristic.`,
  rare: true,
}

export const gravLiftDevice: Gear = {
  id: 0,
  name: 'Grav-lift Device',
  description:
    'The operative can perform the following action once during the battle:',
  cost: 2,
  ap: 1,
  ability: `Place a Grav-wave token within 6" of this operative. Until the end of the battle, each time a friendly HEARTHKYN SALVAGER operative moves within 1" of that token, it gains the FLY keyword until the end of its activation.`,
  rare: true,
}

export const ionExpediter: Gear = {
  id: 0,
  name: 'Ion Expediter',
  description: '',
  cost: 2,
  ability:
    'Select one ion blaster or ion pistol the operative is equipped with. Add 1 to both of its Damage characteristics for the battle.',
  rare: true,
}

//Strategic Assets
export const supplyHold: StrategicAssets = {
  name: 'Supply Hold',
  description:
    'The Kin expect to recover a great deal of technology and resources on their missions, and so have established a sizeable supply hold to secure all of it.',
  rule: 'While your base of operations has this strategic asset, double the quantities of HEARTHKYN SALVAGER equipment in your stash.',
}

export const enhancedPanSpectralScanner: StrategicAssets = {
  name: 'Enhanced Pan Spectral Scanner',
  description:
    'This larger version of the handheld pan spectral scanner can survey a more substantial expanse of ground, enabling the Kin to better assess the nature of the terrain around them and discover the optimal routes of travel through a space hulk.',
  rule: 'In the Select Drop Zone step, after rolling off to determine who decides Attacker and Defender, you can re-roll your dice.',
}

export const excavationMachinery: StrategicAssets = {
  name: 'Excavation Machinery',
  description:
    'Though the Hearthkyn Salvagers’ primary purpose is not to strip a space hulk or wreck of all its valuables, they have the operational remit and equipment to pave the way for those completing that task. Heavy excavation machinery can help them clear paths or move priority salvage, and can even serve as barricades if need be.',
  rule: `At the end of the Scouting step, if you are the Defender or selected the Fortify option, you can move one terrain feature within 1" of your drop zone that does not include any parts with the Heavy trait up to 1".`,
}

// Requisitions
const theirHearthBurns: Requisition = {
  name: 'Their Hearth Burns',
  cost: 1,
  description:
    'When a Kin has become especially impassioned or angry or becomes utterly relentless in the pursuit of their goals, it is said of them that Their Hearth Burns. Kin in this state of mind are particularly dogged and dangerous foes.',
  rule:
    'Purchase this Requisition after a game in which a friendly HEARTHKYN SALVAGER operative was incapacitated by an enemy operative. That friendly operative is harbouring a grudge against that enemy operative’s faction (make a note of this and the enemy’s Faction keyword in the ‘Notes’ section of its narrative datacard). Each time that friendly operative fights in combat or makes a shooting attack against an enemy operative with that Faction keyword, that enemy operative has one additional Grudge token for that combat or shooting attack.' +
    '\n' +
    '\n' +
    'Once that friendly operative has incapacitated 3 enemy operatives with that Faction keyword (this does not have to be in the same battle), it’s no longer harbouring a grudge. You cannot use this Requisition if a friendly operative is already harbouring a grudge, unless you choose to renounce the grudge, in which case that friendly operative loses D6 experience points and is no longer harbouring a grudge.',
}

const returnToTheAncestor: Requisition = {
  name: 'Return To The Ancestor',
  cost: 1,
  description:
    'A key driving force for the Kin is to enrich their Votann with knowledge of the galaxy. The more experience and information a Kin accrues, the more they bring to their Ancestor Core.',
  rule: 'Purchase this Requisition after a game in which a friendly HEARTHKYN SALVAGER operative was incapacitated and removed from your dataslate. You gain a number of Requisition Points equal to the number of ranks that operative had. For example, if that operative had the Ace rank, you would gain 3RP.',
}
const petitionTheGuild: Requisition = {
  name: 'Petition The Guild',
  cost: 2,
  description:
    'The kill team approaches one of the Kin’s many Guilds seeking unusual equipment that will aid them on their missions. The Guild is happy to oblige, provided that the squad offer something of comparable value to them in return.',
  rule: 'Purchase this Requisition before a game, if your kill team is currently conducting a Spec Op. Randomly determine one Recon or Security Tac Op. Until that Spec Op ends, keep a tally of victory points you score from that Tac Op. When you add the fifth mark to the tally, you can add one item of rare equipment to your stash.',
}

const hearthkynTheyn: Operatives = {
  type: 'HEARTHKYN THEYN',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynDozr: Operatives = {
  type: 'Hearthkyn Dozr',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynFieldMedic: Operatives = {
  type: 'Hearthkyn Field Medic',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynGrenadier: Operatives = {
  type: 'Hearthkyn Grenadier',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynGunner: Operatives = {
  type: 'Hearthkyn Gunner',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynJumpPackWarrior: Operatives = {
  type: 'Hearthkyn Jump Pack Warrior',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynKinlynk: Operatives = {
  type: 'Hearthkyn Kinlynk',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynKognitaar: Operatives = {
  type: 'Hearthkyn Kognitaar',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynLokatr: Operatives = {
  type: 'Hearthkyn Lokatr',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynLugger: Operatives = {
  type: 'Hearthkyn Lugger',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

const hearthkynWarrior: Operatives = {
  type: 'Hearthkyn Warrior',
  specialisms: [],
  xp: 0,
  rank: 'Adept',
  battleHonours: [],
  battleScars: [],
  Resttally: 0,
}

export const hearthkynSalvager: Faction = {
  id: 2,
  name: 'Hearthkyn Salvager',
  keyword: 'HEARTHKYN SALVAGER',
  coverImage: 'https://wh40k.lexicanum.com/mediawiki/images/8/82/LOVCover.jpg',
  historyTable: [],
  quirkTable: [],
  equipment: [
    graviticConcussionGrenade,
    plasmaKnife,
    climbingEquipment,
    weavefieldCrest,
    excavationTool,
    autoCalibrator,
  ],
  rareEquipment: [
    aGrudgeDeclared,
    darkstarWeapon,
    relicPlate,
    rightOfClaim,
    gravLiftDevice,
    ionExpediter,
  ],
  strategicAssets: [
    supplyHold,
    excavationMachinery,
    enhancedPanSpectralScanner,
  ],
  requisitions: [theirHearthBurns, returnToTheAncestor, petitionTheGuild],
  specOps: [],
  operatives: [
    hearthkynTheyn,
    hearthkynDozr,
    hearthkynFieldMedic,
    hearthkynGrenadier,
    hearthkynGunner,
    hearthkynJumpPackWarrior,
    hearthkynKinlynk,
    hearthkynKognitaar,
    hearthkynLokatr,
    hearthkynLugger,
    hearthkynWarrior,
  ],
}
