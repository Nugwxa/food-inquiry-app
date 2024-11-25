'use server'

export default async function fetchRestaurantData(
  latitude: string,
  longitude: string,
  pagetoken?: string
) {
  const radius = 5000 // 5km radius
  const apiKey = process.env.NEXT_PUBLIC_Google_API_Key

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&key=${apiKey}${
    pagetoken ? `&pagetoken=${pagetoken}` : ''
  }`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data from Google Places API: ', error)
  }
}
