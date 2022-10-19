import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import BackgroundVideo from '../assets/background-video.mp4'
import axios from 'axios'
import { Typography, useMediaQuery } from '@mui/material'
import BodyFat from '../components/BodyFat'
import { BodyDataData, SetBodyDataData } from '../context/fetchExercises'

const BodyCalculator = () => {
  const bodyDataData = BodyDataData()
  const setBodyDataData = SetBodyDataData()

  const [formComplete, setFormComplete] = useState(false)
  const [bodyFat, setBodyFat] = useState({})


  let isMobile = useMediaQuery('(max-width:1024px)')


  const bodyCalculatorOptions = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
    params: {
      age: bodyDataData.age,
      gender: bodyDataData.gender,
      weight: bodyDataData.weight,
      height: bodyDataData.height,
      neck: bodyDataData.neck,
      waist: bodyDataData.waist,
      hip: bodyDataData.hip
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_EXERCISES_PRIVATE_KEY,
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  }

  useEffect(() => {
    const fetchBodyData = async () => {
      await
        axios.request(bodyCalculatorOptions).then(function (response) {
          setBodyFat(response.data)
        }).catch(function (error) {
          console.error(error);
        })
    }

    fetchBodyData()
  }, [formComplete])


  const ageHandler = (e) => {
    setBodyDataData((prevState => {
      return { ...prevState, age: e.target.value }
    }))
  }
  const genderHandler = (e) => {
    setBodyDataData((prevState => {
      return { ...prevState, gender: e.target.value }
    }))
  }
  const weightHandler = (e) => {
    setBodyDataData((prevState => {
      return { ...prevState, weight: e.target.value }
    }))
  }
  const heightHandler = (e) => {
    setBodyDataData((prevState => {
      return { ...prevState, height: e.target.value }
    }))
  }
  const neckHandler = (e) => {
    setBodyDataData((prevState => {
      return { ...prevState, neck: e.target.value }
    }))
  }
  const waistHandler = (e) => {
    setBodyDataData((prevState => {
      return { ...prevState, waist: e.target.value }
    }))
  }
  const hipHandler = (e) => {
    setBodyDataData((prevState => {
      return { ...prevState, hip: e.target.value }
    }))
  }

  const formSubmit = (e) => {
    e.preventDefault()

    if (!bodyDataData.age || !bodyDataData.gender || bodyDataData.weight || bodyDataData.height || bodyDataData.neck || bodyDataData.waist || bodyDataData.hip) {

    }
    setFormComplete(true)
    console.log(bodyFat)
  }

  console.log(bodyFat)

  return (
    <Box height="90vh">
      {!formComplete && <Box>
        <Typography color="white" pt="2rem" pl="1rem" textTransform="uppercase" fontWeight="700" textAlign="center" fontFamily='Cinzel' sx={{ fontSize: { xs: '17px', sm: '20px', md: '25px', lg: '28px', xl: '32px' } }}>
          Start to change your body with calculating some body data!
        </Typography>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} type="submit" onSubmit={formSubmit} >
          <Box sx={{ padding: { xs: '1rem 3rem', lg: '3rem 25rem', xl: '3rem 35rem' } }} >
            <Box className="bodyCalc__box" sx={{ fontSize: { sx: '14px', md: '18px', lg: '24px' } }}>
              <label htmlFor="age" >Age</label>
              <input id="age" type="number" onChange={ageHandler}></input>
            </Box>
            <Box className="bodyCalc__box" sx={{ fontSize: { sx: '14px', md: '18px', lg: '24px' } }}>
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" onChange={genderHandler} value={bodyDataData.gender} style={{ textAlign: 'right', paddingRight: '1rem' }}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </Box>
            <Box className="bodyCalc__box" sx={{ fontSize: { xs: '14px', md: '18px', lg: '24px' } }}>
              <label htmlFor="weight">Weight</label>
              <input id="weight" className="form__input" type="number" onChange={weightHandler}></input>
            </Box>
            <Box className="bodyCalc__box" sx={{ fontSize: { sx: '14px', md: '18px', lg: '24px' } }}>
              <label htmlFor="height">Height</label>
              <input id="height" type="number" onChange={heightHandler}></input>
            </Box>
            <Box className="bodyCalc__box" sx={{ fontSize: { sx: '14px', md: '18px', lg: '24px' } }}>
              <label htmlFor="neck">Neck</label>
              <input id="neck" type="number" onChange={neckHandler}></input>
            </Box>
            <Box className="bodyCalc__box" sx={{ fontSize: { sx: '14px', md: '18px', lg: '24px' } }}>
              <label htmlFor="waist"> Waist</label>
              <input id="waist" type="number" onChange={waistHandler} />
            </Box>
            <Box className="bodyCalc__box" sx={{ fontSize: { sx: '14px', md: '18px', lg: '24px' } }}>
              <label htmlFor="hip">Hip</label>
              <input id="hip" type="number" onChange={hipHandler}></input>
            </Box>
          </Box>
          <button className="bodyCalc__button" type="submit">submit</button>
        </form>
      </Box >}
      {
        formComplete &&
        <Box>
          <BodyFat bodyFat={bodyFat} age={bodyDataData.age} gender={bodyDataData.gender} bodyData={bodyDataData} />
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

export default BodyCalculator