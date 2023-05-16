import Button from '../Button'
import Tag from '../Tag'

import {
  Card,
  CardContent,
  CardMenu,
  Description,
  HatingContent,
  Infos,
  MenuDescription,
  Rating,
  Title,
  TitleMenu
} from './styles'

type Props = {
  type: 'home' | 'menu'
  title: string
  image: string
  rating?: string
  infos: string[]
  description: string
  to?: string
}

const Product = ({ title, image, rating, infos, description, type }: Props) => {
  if (type === 'home') {
    return (
      <Card>
        <img src={image} />
        <CardContent>
          <HatingContent>
            <Title>{title}</Title>
            <Rating>
              <Title>{rating}</Title>
              <img src={'images/star.png'} alt="Estrela de  classificação" />
            </Rating>
          </HatingContent>
          <Infos>
            {infos.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </Infos>
          <Description>{description}</Description>
          <Button type="button" to={'/perfil'}>
            Saiba mais
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <CardMenu>
      <img src={image} />
      <TitleMenu>{title}</TitleMenu>
      <MenuDescription>{description}</MenuDescription>
      <Button type="linkButton">Adicionar ao carrinho</Button>
    </CardMenu>
  )
}

export default Product
