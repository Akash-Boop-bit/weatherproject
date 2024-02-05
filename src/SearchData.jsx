import React from 'react'

const SearchData = ({ onSearch, locationHandler }) => {
  return (
    <div>
      <input type="text" onChange={locationHandler}/>
      <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchData
