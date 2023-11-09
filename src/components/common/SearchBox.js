import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const SearchBox = (props) => {
    return (
        <InputGroup className='border border-3 rounded-5' style={{ width: props.width }}>
            <InputGroup.Text className='border-0 rounded-5 bg-white'>
                <BsSearch />
            </InputGroup.Text>
            <Form.Control className='border-0 rounded-5 shadow-none' placeholder={props.placeholder} style={{ fontSize: '0.8rem' }} />
        </InputGroup>
    )
}

export default SearchBox