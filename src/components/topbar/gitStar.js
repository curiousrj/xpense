import React from 'react'
import '../../App.css'

const GitStar = () => {
  return (
    <React.Fragment>
        <a className='border-button github-link' href='https://github.com/curiousrj/xpense' target="_blank" rel="noreferrer noopener">
        <i className="fa-brands fa-github github-icon button-icon-margin-right"></i>
            <span>Star</span>
        </a>
    </React.Fragment>
  )
}

export default GitStar