import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'
import SignUp from './Signup'
import Logout from './Logout'
import Products from './Products'
import Product from './Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './SingleProduct'
import MyCart from './MyCart'


function App() {
  const defaultState = {}
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || defaultState)

  const [cart, setCart] = useState([])



  // useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem('user'));
  //   if (savedUser) {
  //    setUser(savedUser);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <>
        <Navbar user={user} defaultState={defaultState} />
        <Routes>
          <Route path='/' element={<Home user={user} defaultState={defaultState} />}></Route>
          <Route path='/login' element={<Login user={user} setUser={setUser} defaultState={defaultState} />}></Route>
          <Route path='/logout' element={<Logout user={user} setUser={setUser} defaultState={defaultState} />}></Route>
          <Route path='/signup' element={<SignUp user={user} defaultState={defaultState} />}></Route>
          <Route path='/products/' element={<Products setCart={setCart} cart={cart} user={user} />}></Route>
          <Route path='/products/:productID' element={<SingleProduct />}></Route>
          <Route path='/mycart' element={<MyCart cart={cart} setCart={setCart}/>} user={user}></Route>





        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
