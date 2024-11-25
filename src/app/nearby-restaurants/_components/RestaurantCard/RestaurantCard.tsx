'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './RestaurantCard.module.css'
interface RestaurantCardProps {
  restaurant: {
    name: string
    address: string
    image: string
    googleMapsLink: string
  }
}
export default function RestaurantCard(props: Readonly<RestaurantCardProps>) {
  const { restaurant } = props
  return (
    <div key={restaurant.name} className={styles.restaurantCard}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.restaurantImage}
          fill
          sizes=" "
          alt={restaurant.name + ' Image'}
          src={restaurant.image}
        />
      </div>

      <div data-theme="purple" className={styles.restaurantContainerInfo}>
        <div className={styles.restaurantName}>{restaurant.name}</div>
        <div>{restaurant.address}</div>

        <div>
          <Button as={Link} href={restaurant.googleMapsLink} target="_blank">
            View Restaurant
          </Button>
        </div>
      </div>
    </div>
  )
}
