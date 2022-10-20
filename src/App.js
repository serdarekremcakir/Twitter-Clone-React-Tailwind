import React from 'react'
import Content from './Components/Content'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div className=' max-w-7xl min-h-screen mx-auto flex'>
      <Header />
      <Content />
      <Sidebar />
    </div>
  )
}

export default App


