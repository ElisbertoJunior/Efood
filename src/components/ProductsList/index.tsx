import Product from '../Product'
import { ProductsContainer, ProductsContent } from './styles'

const ProductsList = () => {
  return (
    <ProductsContainer>
      <div className="container">
        <ProductsContent>
          <Product />
        </ProductsContent>
      </div>
    </ProductsContainer>
  )
}

export default ProductsList
