import GeracoesPokemon from "./GeracoesPokemon"

export default async function Geracoes() {

    const request = await fetch("https://pokeapi.co/api/v2/pokedex")
    const geracoesPokemon = await request.json()

    return (
        <div>
            <div className="">
                    {geracoesPokemon.results.map((grupos: any) => {
                      return (
                        <GeracoesPokemon key={grupos.name} url={grupos.url} />
                      )
                    })}
            </div>
        </div>
    )
}