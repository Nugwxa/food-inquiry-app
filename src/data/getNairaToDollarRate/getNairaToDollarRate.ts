export default async function getNairaToDollarRate(): Promise<number> {
  try {
    const response = await fetch(
      'https://economia.awesomeapi.com.br/json/last/USD-NGN'
    )
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
      return 0
    }
    const data = await response.json()
    return data.USDNGN.bid
  } catch (error) {
    console.error('Error fetching exchange rate:', error)
    return 0
  }
}
