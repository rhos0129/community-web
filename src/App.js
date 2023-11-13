import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from 'pages/Home'
import SignUp from 'pages/auth/SignUp'
import Login from 'pages/auth/Login'
import Profile from 'pages/auth/Profile'
import ArticleList from 'pages/article/ArticleList'
import ArticleView from 'pages/article/ArticleView'
import ArticleForm from 'pages/article/ArticleForm'
import ArticleEdit from 'pages/article/ArticleEdit'
import NotFound from 'pages/NotFound'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/articles/:title' element={<ArticleList />} />
                <Route path='/article/:no' element={<ArticleView />} />
                <Route path='/article/new' element={<ArticleForm />} />
                <Route path='/article/:no/edit' element={<ArticleEdit />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App