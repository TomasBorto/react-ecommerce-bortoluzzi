import './CartWidget.css'
import cart from './assets/cart.svg'
import { useNavigate } from 'react-router-dom'

const CartWidget = ({ totalQuantity }) => {

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate('/cart')} className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget