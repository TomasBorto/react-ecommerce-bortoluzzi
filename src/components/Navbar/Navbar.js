import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from "./assets/SanaSana.jpg"
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {

  const navigate = useNavigate()

  const { totalQuantity } = useContext(CartContext)

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}><img src={logo} alt='sana-sana' className='LogoImg'/></h3>
        <div className="Categories">
          <NavLink to={`/category/alimento`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Alimentos</NavLink>
          <NavLink to={`/category/juguete`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
          <NavLink to={`/category/cama`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camas</NavLink>
        </div>
        <CartWidget totalQuantity={totalQuantity}/>
    </nav>
  )
}

export default NavBar