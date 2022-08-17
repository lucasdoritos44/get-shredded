import React, { useState } from 'react'
import { Box } from '@mui/system'
import humanPng from '../assets/humanPng.png'
import { Typography } from '@mui/material'
import Counter from './Counter'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom'

const BodyFat = ({ bodyFat, age, gender, bodyData }) => {
  const [bodyFatShown, setBodyFatShown] = useState(false)

  const bodyFatProc = bodyFat.data
  if (!bodyFatProc) return 'loading'
  const navyBodyFat = Object.keys(bodyFatProc)
  const navyBodyFatValue = bodyFatProc[navyBodyFat[0]]

  let bodyType = ''
  let bodyShape = ''

  console.log(bodyFatShown)

  if (navyBodyFatValue <= 5 && gender === 'male') {
    bodyType = 'Essential Fat'
    bodyShape = 'too low'
  }
  if (navyBodyFatValue >= 5.01 && navyBodyFatValue <= 13 && gender === 'male') {
    bodyType = 'Athletes'
    bodyShape = 'great'
  }
  if (navyBodyFatValue >= 13.01 && navyBodyFatValue <= 17 && gender === 'male') {
    bodyType = 'Fitness'
    bodyShape = 'good'
  }
  if (navyBodyFatValue >= 17.01 && navyBodyFatValue <= 24 && gender === 'male') {
    bodyType = 'Average'
    bodyShape = 'average'
  }
  if (navyBodyFatValue > 24.01 && gender === 'male') {
    bodyType = 'Obese'
    bodyShape = 'bad'
  }

  console.log(bodyType)
  return (
    <Box width="100vw" height="90vh" display="flex" alignItems="center" justifyContent="center">
      <Counter bodyFat={navyBodyFatValue} bodyFatShown={bodyFatShown} bodyFatLoad={setBodyFatShown} />
      <img src={humanPng} alt="human" className="bodyFat__image" />
      {bodyFatShown &&
        <Box>
          <Typography className="box__animation" zIndex="1" textWrap="wrap" position="absolute" top="20%" left="5%"
            fontSize="4.5rem" textAlign="center" fontFamily='Cinzel' color="rgba(100, 100, 100, 0.6)">
            BODY FAT
          </Typography>
          <Typography className="box__animation1" width="100vw" p="1rem" backgroundColor='rgba(255, 255, 255, 0.3)' zIndex="2" position="absolute" top="55%" textWrap="wrap" left="0%" fontSize="1.2rem" textAlign="center" fontFamily='Cinzel' fontWeight="700" color='black'>
            {navyBodyFatValue < 17 ? 'Congratulations' : ''}, your bodyfat is {bodyShape} and your body type is {bodyType}.
            <br />
            <br />
            Check out our exercises and calories calculator to build body you have always dreamed of!
          </Typography>
          <Link to='/exercises' style={{ position: "absolute", top: "95%", left: '5%', display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
            <KeyboardDoubleArrowLeftIcon style={{ marginRight: '0.5rem' }} />
            <p style={{ fontSize: '17px' }}>EXERCISES</p>
          </Link>
          <Link to='/daily-calories' style={{ position: "absolute", top: "95%", right: '5%', display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
            <p style={{ fontSize: '17px' }}> CALCULATOR</p>
            <KeyboardDoubleArrowRightIcon style={{ marginLeft: '0.5rem' }} />
          </Link>
        </Box>
      }
    </Box>
  )
}

export default BodyFat