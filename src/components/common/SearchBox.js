import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const SearchBox = (props) => {
    return (
        <InputGroup className='border h-50' style={{ width: '40%', height: '38px' }}>
            <InputGroup.Text className='border-0 bg-white'>
                <BsSearch />
            </InputGroup.Text>
            <Form.Control className='border-0 shadow-none' placeholder={props.placeholder} />
        </InputGroup>
    )
}

export default SearchBox