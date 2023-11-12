import SearchBox from 'components/common/SearchBox';
import React from 'react'
import { Pagination } from 'react-bootstrap'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Paging = ({ top }) => {
  return (
    <Pagination className={'w-100 d-flex justify-content-between align-items-center py-0 my-0 ' + (top && 'border-top')}>
      <Pagination.Prev disabled>
        <BsArrowLeft />
        <span className='m-1'>previous</span>
      </Pagination.Prev>
      {
        top ?
          <SearchBox placeholder='카테고리 검색' width='50%' />
          :
          < div className='d-flex border-start-0'>
            <Pagination.Item href='' active>1</Pagination.Item>
            <Pagination.Item href='' >2</Pagination.Item>
            <Pagination.Item href=''>3</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item href=''>999</Pagination.Item>
          </div>
      }
      <Pagination.Next>
        <span className='m-1'>next</span>
        <BsArrowRight />
      </Pagination.Next>
    </Pagination >
  )
}

export default Paging