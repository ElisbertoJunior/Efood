import { MenuListContent, ProductsContainer } from './style'
import Product from '../Product'
import Menus from '../../models/Menu'

type Props = {
  menuItens: Menus[]
}

const Menu = ({ menuItens }: Props) => {
  return (
    <ProductsContainer>
      <div className="container">
        <MenuListContent>
          {menuItens.map((item) => (
            <Product
              type="menu"
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              infos={[]}
            />
          ))}
        </MenuListContent>
      </div>
    </ProductsContainer>
  )
}

export default Menu
