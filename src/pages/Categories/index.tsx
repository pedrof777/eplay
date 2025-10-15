import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import residentEvil from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import fifa23 from '../../assets/images/fifa23.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: residentEvil,
    infos: ['10%', 'R$250,00'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa23,
    infos: ['-5%', 'R$290,00'],
    system: 'PS5',
    title: 'FIFA 23'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: residentEvil,
    infos: ['10%', 'R$250,00'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: residentEvil,
    infos: ['10%', 'R$250,00'],
    system: 'Windows',
    title: 'Resident Evil 4'
  }
]

const emBreve: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4'
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['05/04'],
    system: 'Nitendo',
    title: 'The Legend of Zelda - TOK'
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4'
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4'
  }
]

const Home = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Home
