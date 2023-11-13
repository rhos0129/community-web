import PageTitle from 'components/auth/PageTitle'
import SimpleForm from 'components/auth/SimpleForm'
import SubLink from 'components/auth/SubLink'
import DefaultContainer from 'components/layout/DefaultContainer'
import React from 'react'

const SignUp = () => {

  const formItems = [
    {
      label: '아이디',
      type: 'text',
      placeholder : '4-15자 이내',
    },
    {
      label: '닉네임',
      type: 'text',
      placeholder : '알파벳, 한글, 숫자를 포함하여 20자 이하',
    },
    {
      label: '비밀번호',
      type: 'password',
      placeholder : '알파벳, 숫자를 포함하여 6자 이상',
    },
    {
      label: '비밀번호 확인',
      type: 'password',
      placeholder : '알파벳, 숫자를 포함하여 6자 이상',
    },
  ]

  return (
    <DefaultContainer>
      <div></div>
      <PageTitle />
      <SimpleForm items={formItems} buttonText='회원가입' />
      <SubLink text='이미 회원이신가요?'
        to='로그인' href='/login' />
      <div></div>
    </DefaultContainer>
  )
}

export default SignUp