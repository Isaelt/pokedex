import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/PokedexPage.css'

const SelectType = ({ setSelectValue }) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [types, getAllTypes] = useFetch(url)

  useEffect(() => {
    getAllTypes()
  },[])

  const handleChange = (e) => {
    setSelectValue(e.target.value)
  }

  return (
    <select style={{padding: '.4em', marginLeft: '.8em'}} onChange={handleChange}>
        <option value="allpokemons">All Pokemons</option>
        {
            types?.results.map(type => (
                <option className='option' key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType
