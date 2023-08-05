import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../components/PokedexPage/styles/PokeIdPage.css'
import '../components/PokedexPage/styles/PokeCard.css'

const PokeIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(()=> {
    getSinglePokemon()
  }, [id])

  console.log(pokemon?.stats)
  const firstType = pokemon?.types[0].type.name
  return (
    <article className="pokeid__container">
      <section className="pokeid__firstsection">
      <header className={`pokeid__header ${firstType}-gradiant`}><img className="pokeid__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" /></header>
      <div className="pokeid__containerinfo"> 
      <h3 className="pokeid__id">#{pokemon?.id}</h3> 
      <h2 className="pokeid__name"><span className="pokeid__spanname">{pokemon?.name}</span></h2>
      <ul className="pokeid__listweigth">
        <li className="pokeid__itemsweigth">
          <h4 className="pokeid__label">Weight</h4>
          <span className="pokeid__value">{pokemon?.weight}</span>
        </li>
        <li className="pokeid__itemsheigth">
          <h4 className="pokeid__label">Height</h4>
          <span className="pokeid__value">{pokemon?.height}</span>
        </li>
      </ul>
      <div className="pokeid__conttype">
        <div className="pokeid__type">
      <h4 className="pokeid__labeltypes">Type</h4>
      <ul className="pokeid__listtypes"> 
          {pokemon?.types.map((typeInfo) => (
            <li className="pokeid__itemstypes types" key={typeInfo.type.url}>
            {typeInfo.type.name}
              
            </li>
          ))}
      </ul>
      </div>
      <div className="pokeid__type">
      <h4 className="pokeid__labeltypes">Abilities</h4>
      <ul className="pokeid__listtypes"> 
          {pokemon?.abilities.map((ability) => (
            <li className="pokeid__itemstypes abilities" key={ability.ability.url}>
              {ability.ability.name}
            </li>
          ))}
      </ul>
      </div>
      </div>
      <ul className="pokeid__liststat"><h3 className="pokeid__stat">Stats</h3>
          {pokemon?.stats.map((statInfo) => (
            <li className="pokeid__itemsstat" key={statInfo.stat.url}>
              <h4 className="pokeid__labelstat">{statInfo.stat.name}</h4>
              <span className="pokeid__valuestat">
                {statInfo.base_stat}/150
              </span>
            </li>
          ))}
      </ul>
      </div>
      </section>
      <section className="pokeid__secondsection">
      <h2 className="pokeid__move">Movements</h2>
      <ul className="pokeid__listmove">
          {pokemon?.moves.map((move) => (
            <li className="pokeid__itemmove" key={move.move.url}>
              <span className="pokeid__valuemove">
                {move.move.name}
              </span>
            </li>
          )).slice(0,20)}
        </ul>
      </section>

    </article>
  )
}

export default PokeIdPage
