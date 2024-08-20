import React from 'react'
import Chai from './chai'
import MyButton from './MyButton'
import Navbar from './Componats/navbar'
import Profile from './Componats/Profile'

function App() {
  return (
    <div>
      <Navbar/>
      <Profile />
      <h1>Vishal Babar</h1>
      <Chai />
      <MyButton />
    </div>
  )
}

export default App

