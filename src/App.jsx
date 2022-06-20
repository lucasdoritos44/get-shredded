import React from 'react'
import Header from './components/Header'
import WelcomePage from './pages/WelcomePage'
import Exercises from './pages/Exercises'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SearchedExercises from './pages/SearchedExercises'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/searchedExercises' element={<SearchedExercises />} />
      </Routes>
    </div>
  )
}

export default App