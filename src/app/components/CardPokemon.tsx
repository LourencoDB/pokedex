import { IPokemon } from "@/@types/IPokemon"

export default async function CardPokemon({url}:any){
    const request = await fetch(url)
    const pokemon:IPokemon = await request.json()
    console.log(pokemon.sprites)
    
    return(
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
    )
}