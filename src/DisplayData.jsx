import React, { useState } from 'react'
import classes from './DisplayData.module.css'

const DisplayData = ({ latitude, longitude, address, timeZone, isData, loading, days }) => {

  const [hour, setHours] = useState([])
  
  
  function onHoursHandler(index) {
    if([...hour].includes(index)){
      const arr = [...hour]
      const newhour = arr.filter((ele) => ele !== index)
      console.log(newhour)
      setHours(newhour)
    }else{
      const newhour = [...hour,index]
      console.log(newhour)
      setHours(newhour)
    }
  }

  

  let list = days.map((element,i) => {
    
    let hours = element.hours.map((ele,index)=>{
      return ( <li className={classes.hourlist} key={index}>
        <span>time: {ele.datetime}   </span>
        <span>weather: {ele.icon}   </span>
        <span>temperature: {ele.temp}F   </span>
        <span>humidity: {ele.humidity}%   </span>
        <span>Wind Speen: {ele.windspeed}mph</span>
      </li>)
    })
  

    return <li className={classes.list} key={i}>
        <div className={classes.list1}>
          <span>data: {element.datetime}   </span>
          <span>Today: {element.icon}   </span>
          <span>temperature: {element.temp}F   </span>
          <span>humidity: {element.humidity}%   </span>
          <span>Wind Speen: {element.windspeed}mph</span>
          <button className={classes.morebtn} onClick={() => onHoursHandler(i)}>See In Hours</button>
        </div>
        
        <p className={classes.para1}>description: {element.description}</p>
        {hour.includes(i) && (
          <div className={classes.div2}>
            <ol className={classes.ol2}>
              { hours }
            </ol>
            <button className={classes.lessbtn} onClick={() => onHoursHandler(i)}>See Less</button>
          </div>
        )}
      </li>
  })


  return (
    <>
      {loading ? <h2 className={classes.heading}>loading...</h2> :<div>
        { isData 
        ? <>
          <div className={classes.valhead}>
            <p className={classes.para}><span>Address: {address} | </span> <span>timeZone: {timeZone}</span> </p>
            <p className={classes.para}><span>latitude: {latitude} | </span> <span>longitude: {longitude}</span> </p>
          </div>
          <ol className={classes.ol1}>
            {list}
          </ol>
        </> : <h2 className={classes.heading}>No Data</h2>}
      </div>}
    </>
  )
}

export default DisplayData
