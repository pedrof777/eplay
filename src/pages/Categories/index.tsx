import ProductList from '../../components/ProductList'
import { Game } from '../Home'

import residentEvil from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import fifa23 from '../../assets/images/fifa23.png'
import zelda from '../../assets/images/zelda.png'
import { useEffect, useState } from 'react'

const Home = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameRpg, setGameRpg] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameEsporte, setGameEsporte] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://api-ebac.vercel.app/api/eplay/esporte')
      .then((res) => res.json())
      .then((res) => setGameEsporte(res))
  }, [])

  return (
    <>
      <ProductList games={gameRpg} title="RPG" background="black" />
      <ProductList games={gameAcao} title="Ação" background="gray" />
      <ProductList games={gameEsporte} title="Esporte" background="black" />
      <ProductList games={gameLuta} title="Luta" background="gray" />
      <ProductList games={gameSimulacao} title="Simulação" background="black" />
    </>
  )
}

export default Home
