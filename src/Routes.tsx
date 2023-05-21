import { Routes as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Router>
  )
}

export default Routes
