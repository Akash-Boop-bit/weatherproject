import React from 'react'
import classes from './SearchData.module.css'

const SearchData = ({ onSearch, locationHandler }) => {
  return (
    <div className={classes.maindiv}>
      <input className={classes.input} placeholder='Enter A Location' type="text" onChange={locationHandler}/>
      <button className={classes.button} onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchData
