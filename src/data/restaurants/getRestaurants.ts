'use client'

import fetchRestaurantData from './fetchRestaurants'

function getLocation() {
  return new Promise<{ latitude: number; longitude: number }>(
    (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          resolve({ latitude, longitude }) // Resolve the promise with the coordinates
        },
        (error) => {
          reject('Error fetching location: ' + error.message) // Reject the promise with an error message
        }
      )
    }
  )
}

interface Restaurant {
  name: string
  address: string
  image?: string
  googleMapsLink: string
}

export async function getRestaurants() {
  try {
    const { latitude, longitude } = await getLocation()

    const apiKey = process.env.NEXT_PUBLIC_Google_API_Key!

    const response = await fetchRestaurantData(
      latitude.toString(),
      longitude.toString()
    )

    if (response) {
      // Format the restaurant data to match the desired structure
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const restaurants: Restaurant[] = response.results.map((place: any) => ({
        name: place.name,
        address: place.vicinity,
        image: place.photos
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${apiKey}`
          : undefined,
        googleMapsLink: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
      }))

      return {
        restaurants,
        total: response.results.length,
      }
    } else {
      throw new Error(response.error_message || 'Failed to fetch restaurants')
    }
  } catch (error) {
    console.error(error)
    return {
      restaurants: [],
      total: 0,
    }
  }
}
