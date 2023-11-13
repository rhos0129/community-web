import React from 'react'
import DefaultContainer from 'components/layout/DefaultContainer'
import PageTitle from 'components/auth/PageTitle'
import SimpleForm from 'components/auth/SimpleForm'
import SubLink from 'components/auth/SubLink'

const Login = () => {

  const formItems = [
    {
      label: '아이디',
      type: 'text'
    },
    {
      label: '비밀번호',
      type: 'password'
    },
  ]

  return (
    <DefaultContainer>
      <div></div>
      <PageTitle />
      <SimpleForm items={formItems} buttonText='로그인' />
      <SubLink text='아직 회원이 아니신가요?'
        to='회원가입' href='/signup' />
      <div></div>
    </DefaultContainer>
  )
}

export default Login