import Button from '../Button'
import Tag from '../Tag'

import { useGetFeatureGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia </Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Price>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            Por apenas {parseToBrl(game.prices.current)}
          </S.Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
