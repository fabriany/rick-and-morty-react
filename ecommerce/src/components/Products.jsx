import "./products.css";
import { CartIcon } from "./Icons.jsx";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div>
              <strong>${product.price}</strong>
            </div>
            <div>
              <button>
                <CartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
