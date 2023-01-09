import { useEffect } from 'react'
import { useKaloBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const xaloPriceBusd = useKaloBusdPrice()
  useEffect(() => {
    const xaloPriceBusdString = xaloPriceBusd ? xaloPriceBusd.toFixed(2) : ''
    document.title = `Pancake Swap - ${xaloPriceBusdString}`
  }, [xaloPriceBusd])
}
export default useGetDocumentTitlePrice
