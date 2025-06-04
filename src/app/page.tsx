import CardPokemon from "./components/CardPokemon";

export default async function Home() {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon")
  const listPokemon = await request.json()
  console.log(listPokemon)

  return (
    <div>
      <h1 className="text-center">POKEDEX</h1>
      <a href="">os primeiros 20</a>
      <div>
        {listPokemon.results.map((pokemon:any) => {
          return (
            <CardPokemon key={pokemon.name} url={pokemon.url} />
          )
        })}
      </div>
    </div>
  );
}
/*

*/