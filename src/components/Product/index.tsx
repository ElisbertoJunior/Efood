import {
  Button,
  Card,
  CardContent,
  Description,
  HatingContent,
  Rating,
  Title
} from './styles'

const Product = () => {
  return (
    <Card>
      <img src={'images/sushi.png'} />
      <CardContent>
        <HatingContent>
          <Title>Hioki Sushi</Title>
          <Rating>
            <Title>4.9</Title>
            <img src={'images/star.png'} alt="Estrela de  classificação" />
          </Rating>
        </HatingContent>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
        <Button>Saiba mais</Button>
      </CardContent>
    </Card>
  )
}

export default Product
