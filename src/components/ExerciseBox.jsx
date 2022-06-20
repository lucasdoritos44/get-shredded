import React from 'react'
import { Box, Typography } from '@mui/material'

const ExerciseBox = ({ name, image, bodyPart }) => {

  return (
    <Box className="exercise__box" width="350px" backgroundColor="#eeeeee" margin="1rem" borderRadius="12px" alignItems="center">
      <Typography fontSize="20px" textTransform="capitalize" p='15px' fontWeight="700">
        {name}name
      </Typography>
      <Box maxHeight="350px">
        <img src={image} alt="exercise" loading="lazy" height="90%" />
      </Box>
      <Typography textTransform="capitalize" fontSize="24px" color="#e74242">
        {bodyPart}
      </Typography>
    </Box>
  )
}

export default ExerciseBox