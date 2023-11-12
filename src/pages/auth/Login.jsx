import React from 'react'
import GridContainer from 'components/layout/GridContainer'
import { Button, Form, Stack } from 'react-bootstrap'
import Logo from 'components/layout/Logo'

const Login = () => {
  return (
    <GridContainer>
      <div></div>
      <Stack gap={1} className="w-100 mt-5 text-center">
        <Logo center onlyLogo />
        <h2 className='fw-bolder fs-4 text-uppercase'>com에 오신것을 환영합니다.</h2>
        <span className='fs-sm text-uppercase'>com은 공부 목적으로 만들어본 간단한 개발자 커뮤니티입니다. </span>
      </Stack>
      <Form className='w-100 mt-5'>
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button className='w-100 bg-bluegray-800 border-bluegray-800'>로그인</Button>
      </Form>
      <div className='mt-4 fs-sm'>
        <span className='me-2'>아직 회원이 아니신가요?</span>
        <a className='text-blue' href='/signup'>회원가입</a>
      </div>
      <div></div>
    </GridContainer>

  )
}

export default Login