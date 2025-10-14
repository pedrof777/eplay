import Tag from '../Tag'
import { Card, Descricao, Titulo } from './style'

const Product = () => (
  <Card>
    <img src="https://dummyimage.com/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint,
      voluptatum nemo iusto aspernatur odit impedit iste aut rem libero,
      voluptatibus magnam veniam repellendus consequuntur? Minima a at labore
      architecto!
    </Descricao>
  </Card>
)

export default Product
