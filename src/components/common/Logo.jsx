import React from 'react'
import { GoCodeReview } from "react-icons/go";

const Logo = ({ center, onlyLogo }) => {
  return (
    <h1 className={center ? 'mx-auto' : 'fs-3 mt-2 mb-1 mx-2 d-flex align-items-center'}>
      <a className='link-bluegray-800 link-underline-opacity-0'
        href='/'  >
        <GoCodeReview className='mx-1' size={'40px'} />
        {
          !onlyLogo &&
          <span className='fw-bold text-uppercase'>
            com
          </span>
        }

      </a>
    </h1>
  )
}

export default Logo