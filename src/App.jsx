import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <main className='min-h-screen font-primary'>
        <Outlet /> 
        </main>
        <h2>Footer</h2>
      </UserProvider>
    </>
  )
}

export default App