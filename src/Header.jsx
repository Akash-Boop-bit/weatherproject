import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <>
    <div className={classes.main}>
      <h1 className={classes.heading}>Weather Application</h1>
      
    </div>
    <div className={classes.under}></div>
    </>
    
  )
}

export default Header
