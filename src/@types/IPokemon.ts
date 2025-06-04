import { ISprites } from "./ISprites"

export interface IPokemon {
//   abilities: Ability[]
  base_experience: number
//   cries: Cries
//   forms: Form[]
//   game_indices: Index[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
//   moves: Mfe[]
  name: string
  order: number
//   past_abilities: PastAbility[]
  past_types: any[]
//   species: Species
   sprites: ISprites
//   stats: Stat[]
//   types: Type[]
  weight: number
}