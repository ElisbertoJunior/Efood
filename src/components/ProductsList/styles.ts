import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductsContainer = styled.section`
  background-color: ${colors.whiteColor};
`

export const ProductsContent = styled.ul`
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 48px;
`
export const MenuListContent = styled(ProductsContent)`
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`
