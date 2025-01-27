import { useState } from 'react'
import { Products } from './components/products.jsx'
import { Header } from './components/Header.jsx'
import initialProducts from './mocks/products.json'
import { useFilter } from './hooks/useFilters.js'



function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(products);

  return (
   <>
    <Header />
    <Products products={filteredProducts}/>
   </>
  )
}

export default App
