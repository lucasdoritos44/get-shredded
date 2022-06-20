import { Typography, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { SetSearchedContextData, FetchExercisesData, SearchedContextData } from '../context/fetchExercises'

const SearchExercises = () => {
  const [search, setSearch] = useState('')

  const exercises = FetchExercisesData()
  const setExercises = SetSearchedContextData()

  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    const searchedExercises = exercises.filter(
      (item) => item.bodyPart.toLowerCase().includes(search)
    );

    console.log(searchedExercises)
    setExercises(searchedExercises)
    navigate('/searchedExercises')
  }


  return (
    <Stack alignItems="center" justifyContent="center">
      <form onSubmit={formSubmit}>
        <TextField
          className="searching__input"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              height: '2.5rem',
              color: 'white',
              textAlign: 'center',
              fontSize: {
                lg: '24px',
                md: '16px'
              }
            },
            width: {
              lg: '1170px',
              md: '850px',
              sm: '600px',
              xs: '350px'
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search By Body Parts..."
          type="text"
        />
      </form>
      <Typography color="white" textTransform="capitalize" align="center" variant="h6" pt={3} sx={{ fontFamily: 'Tiro Gurmukhi' }}>
        Search for over 1000 exercises that make your body shredded
      </Typography>
    </Stack>
  )
}

export default SearchExercises