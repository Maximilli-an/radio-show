import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Player from './components/Player'

const queryClient = new QueryClient()

const App: React.FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/player" element={<Player />}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
