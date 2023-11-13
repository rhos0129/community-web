import React from 'react'

const PageTitle = ({title, desc, icon, className}) => {
  return (
    <div className={'w-100 d-flex justify-content-between align-items-center ' + className}>
      <div>
        <h2 className='mb-1'>
          {title}
        </h2>
        <p className='mb-1'>
          {desc}
        </p>
      </div>
      {icon}
    </div>
  )
}

PageTitle.defaultProps = {
  title: '카테고리명',
  desc : null,
  icon : null
}

export default PageTitle