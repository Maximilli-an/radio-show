import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainPage from './components/MainPage'

const queryClient = new QueryClient()

const App: React.FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>On Demand Content</h1>
        <MainPage/>
        </div>
    </QueryClientProvider>
  )
}

export default App
