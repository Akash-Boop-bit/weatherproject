import React from 'react'

const DisplayData = ({ latitude, longitude, address, timeZone, isData, loading, days }) => {

  let list = days.map((ele,i) => {
    return <li key={i}>
        <span>data: {ele.datetime}  | </span>
        <span>Today: {ele.icon}  | </span>
        <span>temperature: {ele.temp}F |  </span>
        <span>humidity: {ele.humidity}%  | </span>
        <span>Wind Speen: {ele.windspeed}mph</span>
        
        <p>description: {ele.description}</p>
      </li>
  })


  return (
    <>
      {loading ? <h2>loading</h2> :<div>
        { isData 
        ? <>
          <p><span>Address: {address} </span> <span>timeZone: {timeZone}</span> </p>
          <p><span>latitude: {latitude} </span> <span>longitude: {longitude}</span> </p>
          <ol>
            {list}
          </ol>
        </> : <h2>No Data</h2>}
      </div>}
    </>
  )
}

export default DisplayData
