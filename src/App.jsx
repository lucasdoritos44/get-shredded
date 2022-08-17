import React from 'react'
import Header from './components/Header'
import WelcomePage from './pages/WelcomePage'
import Exercises from './pages/Exercises'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SearchedExercises from './pages/SearchedExercises'
import ExerciseDetails from './pages/ExerciseDetails'
import BodyCalculator from './pages/BodyCalculator'
import DailyCalories from './pages/DailyCalories'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/searchedExercises' element={<SearchedExercises />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
        <Route path='/body-calculator' element={<BodyCalculator />} />
        <Route path='/daily-calories' element={<DailyCalories />} />
      </Routes>
    </div>
  )
}

export default App