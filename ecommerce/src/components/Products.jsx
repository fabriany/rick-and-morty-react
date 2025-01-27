import "./Products.css";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (<li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div>
              <strong>${product.price}</strong>
            </div>
            <div>
              <button onClick={() => {
                isProductInCart ? removeFromCart(product) : addToCart(product) 
              }}>
                {isProductInCart 
                  ? <ClearCartIcon />
                  : <CartIcon /> 
                }
              </button>
            </div>
          </li>
        )})}
      </ul>
    </main>
  )
}
