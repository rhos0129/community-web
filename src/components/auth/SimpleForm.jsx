import React from 'react'
import { Button, Form } from 'react-bootstrap'

const SimpleForm = ({ items, buttonText }) => {
  return (
    <Form className='w-100 mt-4'>
      {
        items.map((item, key) => (
          <Form.Group className="mb-3" key={key}>
            <Form.Label className='fs-sm'>{item.label}</Form.Label>
            <Form.Control type={item.type} placeholder={item.placeholder} />
          </Form.Group>
        ))
      }
      <Button className='w-100 mt-4 bg-bluegray-800 border-bluegray-800'>{buttonText}</Button>
    </Form>
  )
}

SimpleForm.defaultProps = {
  items: [
    {
      label: '라벨',
      type: '타입',
      placeholder: '필수입력'
    },
  ],
  buttonText: '버튼클릭'

}

export default SimpleForm