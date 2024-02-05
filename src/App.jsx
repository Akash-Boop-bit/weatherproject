import { useState, useEffect } from 'react'
import SearchData from './SearchData'
import DisplayData from './DisplayData'
import Header from './Header'


function App() {

  const [location, setLocation] = useState('')
  const [days, setDays] = useState([])
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [address, setAddress] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [isData, setIsData] = useState(false)
  const [loading, setLoading] = useState(false)

  const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=EGEYBQ5EFDJ2R83B83RC3G27P`

  const weatherData = async (url) => {
    try {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      setDays(data.days)
      setLatitude(data.latitude)
      setLongitude(data.longitude)
      setAddress(data.resolvedAddress)
      setTimeZone(data.timezone)
      setIsData(true)
      setLoading(false)
      console.log(data)
    }catch (error){
      console.log("sorry we couldn't get the data")
      setIsData(false)
      setLoading(false)
    }
  }
  function locationHandler (event) {
    setLocation(event.target.value)
  }
  function onSearch() {
    weatherData(API) 
  }

  return (
    <>
      <Header />
      <SearchData onSearch={onSearch} locationHandler={locationHandler} />
      <DisplayData 
        latitude={latitude}
        longitude={longitude}
        address={address}
        timeZone={timeZone}
        isData={isData}
        loading={loading}
        days={days}
        />
    </>
  )
}

export default App
