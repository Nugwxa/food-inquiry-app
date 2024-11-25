'use client'

import { getRestaurants } from '@/data/restaurants/getRestaurants'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import RestaurantCard from '../RestaurantCard'
import styles from './RestaurantGrid.module.css'

export default function RestaurantsGrid() {
  const { page } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRestaurants() {
      setLoading(true)
      try {
        const data = await getRestaurants()
        setResponse(data)
      } catch (error) {
        console.error('Error fetching restaurants:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [page])

  return (
    <div className={styles.restaurantsGrid}>
      {loading ? (
        <p>Loading...</p>
      ) : response.restaurants && response.restaurants.length === 0 ? (
        <p>No restaurants found</p>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response.restaurants.map((restaurant: any) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))
      )}
    </div>
  )
}
