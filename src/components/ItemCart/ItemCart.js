import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCart.css'

const ItemCart = ({ name, img, quantity, price }) => {

    return (

        <div className="row align-items-center" style={{ color: "black" }}>

            <picture className="col-lg-4">
                <img src={img} className="ItemImg"/>
            </picture>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <p><strong>{name}</strong></p>
            </div>

            <div className="col-lg-5 Subtotal">
                <p><strong><span style={{ color: "black" }}>Cantidad: </span></strong><span style={{ color: "black" }}>{quantity}</span> </p>
                <p><strong><span style={{ color: "black" }}>Precio: </span></strong><span style={{ color: "black" }}>${price}</span> </p>
                <p><strong><span style={{ color: "black" }}>Subtotal: </span></strong><span style={{ color: "black" }}>${price * quantity}</span> </p>
            </div>

            
            <hr className="my-4" />
        </div>
    )
}

export default ItemCart