import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App