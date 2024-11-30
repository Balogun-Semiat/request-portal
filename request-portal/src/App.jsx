import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen font-primary'>
      <Outlet /> 
      </main>
      <h2>Footer</h2>
    </>
  )
}

export default App