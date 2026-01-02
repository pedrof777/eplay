import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Home = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: figthGames, isLoading: isLoadingFigth } =
    useGetFigthGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        title="Esporte"
        background="black"
        id="sport"
        isLoading={isLoadingSport}
      />
      <ProductList
        games={figthGames}
        title="Luta"
        background="gray"
        id="figth"
        isLoading={isLoadingFigth}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Home
