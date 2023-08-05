import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeIdPage from './pages/PokeIdPage'
import Page404 from './pages/Page404'
import ProtectedRoutes from './pages/ProtectedRoutes'
import img from './assets/img.svg'

function App() {
  
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/')
}

  return (
    <div>
      <header className='header'>
        <div className='header__red'>
        <img onClick={handleSubmit} className='header__img' src={img} alt="" />
        </div>
        <div className='header__black'></div>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokeIdPage />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
