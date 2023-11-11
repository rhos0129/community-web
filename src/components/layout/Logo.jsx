import React from 'react'
import { GoCodeReview } from "react-icons/go";

const Logo = () => {
  return (
    <h1 className='h3 mt-2 mb-1 mx-2 d-flex align-items-center'>
      <a className='link-bluegray-800 link-underline-opacity-0'
        href='/'  >
        <GoCodeReview className='mx-1' size={'40px'} />
        <span className='fw-bold text-uppercase'>
          com
        </span>
      </a>
    </h1>
  )
}

export default Logo