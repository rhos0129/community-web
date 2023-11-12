import React from 'react'
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import { HiOutlineSortDescending } from 'react-icons/hi';

const Buttons = () => {
    return (
        <div className='w-100 d-flex justify-content-between my-3'>
            <Button className='bg-bluegray-800'>
                <BsPencilSquare className='me-1' />
                작성하기
            </Button>
            <DropdownButton className='border border-bluegray-900' variant="white"
                as={ButtonGroup}
                title={
                    <span>
                        <HiOutlineSortDescending className='me-1' />
                        최신순
                    </span>
                } >
                <Dropdown.Item className='bg-bluegray-300'
                    eventKey="1" active >최신순</Dropdown.Item>
                <Dropdown.Item eventKey="2">댓글순</Dropdown.Item>
                <Dropdown.Item eventKey="3">조회순</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Buttons