import ContentWrapper from '@/components/ContentWrapper'
import RestaurantsGrid from './_components/RestaurantsGrid'

export default async function NearbyRestaurants() {
  return (
    <ContentWrapper>
      <h1>Nearby Restaurants</h1>

      <RestaurantsGrid />
    </ContentWrapper>
  )
}
