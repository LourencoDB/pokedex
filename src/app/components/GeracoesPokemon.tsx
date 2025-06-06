import { IGeracao } from "@/@types/IGeracao"

export default async function GeracoesPokemon({url}:any){
    const request = await fetch(url)
    const pokemon:IGeracao = await request.json()
    
    return(
        <div>
            <div className="flex items-center">
                <h2>{pokemon.name}</h2>
            </div>
        </div>
    )
}