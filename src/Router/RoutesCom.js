import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/index'
import { About, Navbar, Project, Contact, Footer, Login, Register, TopBtn } from '../components/index'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Auth from '../Services/auth/Auth'
import { useDispatch } from 'react-redux'
import { SuccessLogined } from '../redux/reducers/auth/LoginSlice'
import { getItem } from '../localStorge/index'
import Profile from '../components/Profile/Profile'
import Admin from '../pages/Admin/Admin'
import NotFound from '../pages/404/NotFound'
const RoutesCom = () => {
    const { logined, user } = useSelector(state => state.LoginSlice)
    const [btnTop, setbtnTop] = useState(false)

    const [admin, setAdmin] = useState(false)

    const dispatch = useDispatch()
    const token = getItem('token') ? getItem('token') : false
    const Getuser = async () => {
        const data = await Auth.GetUser()
        dispatch(SuccessLogined(data))
    }

    useEffect(() => {
        window.addEventListener('scroll', e => {
            const value = window.scrollY
            if (value > 300) {
                setbtnTop(true)
            } else {
                setbtnTop(false)
            }
        })
        if (token) {
            Getuser()
        }
        if (user !== null) {
            setAdmin(user.isadmin)
        }
    }, [logined, user])
    return <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            {logined ? <Route path='/profile' element={<Profile />} /> : ''}
            {!logined ? <Route path='/login' element={<Login />} /> : ""}
            {!logined ? <Route path='/register' element={<Register />} /> : ""}
            {admin ? <Route path='/admin' element={<Admin />} /> : ''}
            <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <TopBtn btnTop={btnTop} />
    </>
}

export default RoutesCom