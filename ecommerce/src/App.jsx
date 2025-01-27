import { useState } from 'react'
import { Products } from './components/products.jsx'
import { Header } from './components/Header.jsx'
import initialProducts from './mocks/products.json'
import { useFilter } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './contex/cartProvide.jsx'



function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(products);

  return (
   <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
   </CartProvider>
  )
}

export default App
