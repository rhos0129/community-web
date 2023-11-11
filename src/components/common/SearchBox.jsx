import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const SearchBox = ({ width, placeholder }) => {
  return (
    <InputGroup className='border border-3 rounded-5' style={{ width: width }}>
      <InputGroup.Text className='border-0 rounded-5 bg-white'>
        <BsSearch />
      </InputGroup.Text>
      <Form.Control className='border-0 rounded-5 shadow-none fs-sm'
        placeholder={placeholder} />
    </InputGroup>
  )
}

SearchBox.defaultProps = {
  width : '100%',
  placeholder: '검색'
}

export default SearchBox