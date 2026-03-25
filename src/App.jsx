import { useState } from 'react'
import PaletteGenerator from './components/PaletteGenerator'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <span className="logo-dot" style={{ background: '#FF6B6B' }} />
          <span className="logo-dot" style={{ background: '#4ECDC4' }} />
          <span className="logo-dot" style={{ background: '#45B7D1' }} />
        </div>
        <h1>Paletta</h1>
        <p className="subtitle">Pick keywords, combine them freely, and generate a palette that's uniquely yours.</p>
      </header>
      <main>
        <PaletteGenerator />
      </main>
      <footer>
        <p>Powered by color theory · Created by Hoyeon Lee</p>
      </footer>
    </div>
  )
}

export default App
