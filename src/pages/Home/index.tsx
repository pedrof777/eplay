import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  realese_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductList
          games={soonGames}
          title="Em breve"
          background="black"
          id="soonGames"
        />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
