import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ArticleList from './pages/ArticleList'
import ArticleView from './pages/ArticleView'
import ArticleForm from './pages/ArticleForm'
import ArticleEdit from './pages/ArticleEdit'
import NotFound from './pages/NotFound'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/articles' element={<ArticleList />} />
                <Route path='/article/:no' element={<ArticleView />} />
                <Route path='/article/wirte' element={<ArticleForm />} />
                <Route path='/article/:no/edit' element={<ArticleEdit />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App