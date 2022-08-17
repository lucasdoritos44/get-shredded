import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import BackgroundVideo from '../assets/background-video.mp4'
import { BodyDataData } from '../context/fetchExercises'
import { Typography } from '@mui/material'


const DailyCalories = () => {
  const [level, setLevel] = useState('level_1')
  const [levelSelected, setLevelSelected] = useState(false)
  const [dailyCalories, setDailyCalories] = useState({})

  const bodyData = BodyDataData()

  const axios = require("axios");

  const caloriesCalcOptions = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
    params: {
      age: bodyData.age,
      gender: bodyData.gender,
      height: bodyData.height,
      weight: bodyData.weight,
      activitylevel: level
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_EXERCISES_PRIVATE_KEY,
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

  console.log(bodyData)

  useEffect(() => {
    const fetchCalc = async () => {
      await axios.request(caloriesCalcOptions).then(function (response) {
        console.log(response)
        setDailyCalories(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    fetchCalc()
  }, [levelSelected])


  const levelHandler = (e) => {
    setLevel(e.target.value)

    setLevelSelected(true)

  }

  return (
    <Box p='2rem'>
      {!levelSelected && <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem' }}>
        <label style={{ color: 'white' }}>
          Select the intensity level of your daily activities
        </label>
        <br />
        <select onChange={levelHandler} style={{ width: '200px', height: '50px' }}>
          <option value="level_1">Level 1</option>
          <option value="level_2">Level 2</option>
          <option value="level_3">Level 3</option>
          <option value="level_4">Level 4</option>
          <option value="level_5">Level 5</option>
        </select>
      </form>}
      {levelSelected &&
        <Box display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {dailyCalories &&
            <Box pb='4rem'>
              <Typography variant="h4" fontFamily='Cinzel' color="white">
                Maintain weight
              </Typography>
              <Typography variant="h7" fontFamily='Cinzel' color="white" >
                {Math.round(Object.values(dailyCalories.data.goals)[0])} kcal
              </Typography>
            </Box>}
          {dailyCalories && <Box pb='4rem'>
            <Typography variant="h4" fontFamily='Cinzel' color="white">
              Gain Weight
            </Typography>
            <br />
            <Typography variant="h7" fontFamily='Cinzel' color="white">
              Mild weight gain (0.25kg) = {Math.round(Object.values(dailyCalories.data.goals)[4].calory)} kcal
            </Typography>
            <br />
            <br />
            <Typography variant="h7" fontFamily='Cinzel' color="white">
              Weight gain (0.50kg) = {Math.round(Object.values(dailyCalories.data.goals)[5].calory)} kcal
            </Typography>
            <br />
            <br />
            <Typography variant="h7" fontFamily='Cinzel' color="white">
              Extreme weight gain (1kg) = {Math.round(Object.values(dailyCalories.data.goals)[6].calory)} kcal
            </Typography>
          </Box>}
          {dailyCalories && <Box height="40vh">
            <Typography variant="h4" fontFamily='Cinzel' color="white">
              Lose Weight
            </Typography>
            <br />
            <Typography variant="h7" fontFamily='Cinzel' color="white">
              Mild Lose Weight (0.25kg) = {Math.round(Object.values(dailyCalories.data.goals)[1].calory)} kcal
            </Typography>
            <br />
            <br />
            <Typography variant="h7" fontFamily='Cinzel' color="white">
              Lose weight (0.50kg) = {Math.round(Object.values(dailyCalories.data.goals)[2].calory)} kcal
            </Typography>
            <br />
            <br />
            <Typography variant="h7" fontFamily='Cinzel' color="white">
              Extreme lose weight (1kg) = {Math.round(Object.values(dailyCalories.data.goals)[3].calory)} kcal
            </Typography>
          </Box>}
        </Box>
      }
      <video className='background__video' loop autoPlay muted >
        <source
          src={BackgroundVideo}
          type="video/mp4"
        />
      </video>
    </Box >
  )
}

export default DailyCalories