import React from 'react'
import {Link} from 'react-router-dom'
import GitStar from './gitStar'
import NavBar from './navBar'

const TopBar = () => {
  return (
    <React.Fragment>
      <div className='logo-bar'>
      <Link to="/">Xpense</Link>
      <GitStar />
      </div>
      <NavBar />
    </React.Fragment>
  )
}

export default TopBar