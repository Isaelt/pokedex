import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import '../components/PokedexPage/styles/PokedexPage.css'
import SelectType from "../components/PokedexPage/SelectType"
import Pagination from "../components/Pagination"

const PokedexPage = () => {

  const trainer = useSelector(reducer=>reducer.trainer)
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allpokemons')
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
  const [pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)

  useEffect(() => {
    if (selectValue == 'allpokemons') {
      getAllPokemons()
    } else { 
      getPokemonsByType(selectValue)
      
    }
    
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => poke.name.includes(inputValue)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const totalPokemons = pokemons?.results.length
  

  return (
    <div className="pokedex__container">
      <p className="poke__parrafo"><span className="poke__span">Welcome {trainer}</span>, here you could find your favorite pokemon.</p>
      <form className="poke__form" onSubmit={handleSubmit}>
        <input className="poke__input" ref={inputSearch} type="text" />
        <button className="poke__btn">Search</button>
        <SelectType setSelectValue={setSelectValue}/>
      </form>
      
      <div className="pokecard__container">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard 
            key={poke.url}
            url={poke.url}
            />
          )).slice(firstPostIndex, lastPostIndex)
        }
      </div>
      <Pagination
        totalPosts={totalPokemons}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
    </div>
  )
}

export default PokedexPage
