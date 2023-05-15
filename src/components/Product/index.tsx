import Tag from '../Tag'
import {
  Button,
  Card,
  CardContent,
  Description,
  HatingContent,
  Infos,
  Rating,
  Title
} from './styles'

type Props = {
  title: string
  image: string
  rating: string
  infos: string[]
  description: string
  onClick?: () => void
}

const Product = ({
  title,
  image,
  rating,
  infos,
  description,
  onClick
}: Props) => {
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
        <Button onClick={onClick}>Saiba mais</Button>
      </CardContent>
    </Card>
  )
}

export default Product
