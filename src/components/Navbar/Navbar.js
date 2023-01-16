import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}>SANA SANA</h3>
        <div className="Categories">
          <NavLink to={`/category/alimento`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Alimentos</NavLink>
          <NavLink to={`/category/juguete`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
          <NavLink to={`/category/cama`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camas</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar