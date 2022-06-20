import React, { useState } from 'react'
import { FetchExercisesData } from '../context/fetchExercises'
import { Box, Pagination } from '@mui/material'

import ExerciseBox from '../components/ExerciseBox'

const Exercises = () => {
  const exercises = FetchExercisesData()
  console.log(exercises)

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 16

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!exercises) return 'loading'

  return (
    <div className="exercises__wrapper">
      <Box className="exercises" maxWidth="100vw" minHeight="100vh" id="exercises" display="flex" justifyContent="center" flexWrap="wrap">
        {currentExercises.map((exercise) => {
          return (
            <ExerciseBox key={exercise.id} name={exercise.name} image={exercise.gifUrl} bodyPart={exercise.bodyPart} />
          )
        })}
      </Box>
      {exercises.length > 16 && (
        <Pagination
          color='primary'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="medium"
        />
      )}
    </div>

  )
}

export default Exercises