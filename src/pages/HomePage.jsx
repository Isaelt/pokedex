import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import img2 from '../assets/img2.svg'
import '../components/PokedexPage/styles/HomePage.css'

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerG(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <div className="home">
      <img className="home__img" src={img2} alt="" />
      <h2 className="home__hi">Hi trainer!</h2>
      <p className="home__start">To start, write your trainer name </p>
      <form className="home__form" onSubmit={handleSubmit}>
        <input className="home__input" ref={inputTrainer} type="text" placeholder="Your name"/>
        <button className="home__btn">Gotta catch'em all!</button>
      </form>
    </div>
  )
}

export default HomePage
