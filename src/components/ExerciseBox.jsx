import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ExerciseBox = ({ id, name, image, bodyPart }) => {

  return (
    <Link to={`/exercise/${id}`} className="exercise__box">
      <Box className="exercise__box" width="350px" backgroundColor="#ffffff" margin="1rem" borderRadius="12px" alignItems="center">
        <Typography fontSize="20px" textTransform="uppercase" p='15px' fontWeight="700">
          {name}name
        </Typography>
        <Box maxHeight="350px">
          <img src={image} alt="exercise" loading="lazy" height="90%" />
        </Box>
        <Typography textTransform="capitalize" fontSize="24px" color="#e74242">
          {bodyPart}
        </Typography>
      </Box>
    </Link>

  )
}

export default ExerciseBox