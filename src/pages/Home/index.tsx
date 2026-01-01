import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
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
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Loader />
        <Banner />
        <ProductList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
          isLoading={isLoadingSale}
        />
        <ProductList
          games={soonGames}
          title="Em breve"
          background="black"
          id="soonGames"
          isLoading={isLoadingSoon}
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
