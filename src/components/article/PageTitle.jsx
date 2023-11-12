import React from 'react'

const PageTitle = ({title, desc, icon}) => {
  return (
    <div className='w-100 bg-bluegray-600 text-white py-3 px-5 d-flex justify-content-between align-items-center rounded-3'>
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
  desc : '해당 카테고리의 간단한 설명',
  icon : 'null'
}

export default PageTitle