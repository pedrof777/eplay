import ProductList from '../../components/ProductList'
import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Home = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: figthGames } = useGetFigthGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && rpgGames && simulationGames && figthGames && sportGames) {
    return (
      <>
        <ProductList games={rpgGames} title="RPG" background="black" id="rpg" />
        <ProductList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Esporte"
          background="black"
          id="sport"
        />
        <ProductList
          games={figthGames}
          title="Luta"
          background="gray"
          id="figth"
        />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
