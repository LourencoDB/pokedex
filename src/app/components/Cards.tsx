import CardPokemon from "./CardPokemon"


export default async function Cards() {

    const request = await fetch("https://pokeapi.co/api/v2/pokemon")
    const listPokemon = await request.json()

    return(
        <div>
                {listPokemon.results.map((pokemon: any) => {
                  return (
                    <CardPokemon key={pokemon.name} url={pokemon.url} />
                  )
            })}
        </div>
    )
}