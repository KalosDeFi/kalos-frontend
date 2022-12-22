import { useEffect } from 'react'
import { useKaloBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const kaloPriceBusd = useKaloBusdPrice()
  useEffect(() => {
    const kaloPriceBusdString = kaloPriceBusd ? kaloPriceBusd.toFixed(2) : ''
    document.title = `Pancake Swap - ${kaloPriceBusdString}`
  }, [kaloPriceBusd])
}
export default useGetDocumentTitlePrice
