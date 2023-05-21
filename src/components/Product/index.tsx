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
  rating?: number
  description: string
  featured?: boolean
  tipo: string
  id: number
}

const Product = ({
  title,
  image,
  rating,
  description,
  type,
  featured,
  tipo,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 150) {
      return description.slice(0, 150) + '...'
    }
  }

  if (type === 'home') {
    return (
      <Card>
        <img height={217} width={472} src={image} />
        <CardContent>
          <HatingContent>
            <Title>{title}</Title>
            <Rating>
              <Title>{rating}</Title>
              <img src={'images/star.png'} alt="Estrela de  classificação" />
            </Rating>
          </HatingContent>
          <Infos>
            {featured ? (
              <>
                <Tag key={'destaque'}>{'Destaque da semana'}</Tag>
                <Tag key={tipo}>{tipo}</Tag>
              </>
            ) : (
              <Tag key={tipo}>{tipo}</Tag>
            )}
          </Infos>
          <Description>{getDescription(description)}</Description>
          <Button type="button" to={`/perfil/${id}`}>
            Saiba mais
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <CardMenu>
      <img height={167} width={304} src={image} />
      <TitleMenu>{title}</TitleMenu>
      <MenuDescription>{getDescription(description)}</MenuDescription>
      <Button type="linkButton">Adicionar ao carrinho</Button>
    </CardMenu>
  )
}

export default Product
