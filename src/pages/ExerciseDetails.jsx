import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/system'
import { Stack, useMediaQuery } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Typography } from '@mui/material';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [youtubeVideos, setYoutubeVideos] = useState({})
  const { id } = useParams()

  let isMobile = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailsData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions)
      console.log(exerciseDetailsData)
      setExerciseDetail(exerciseDetailsData)
    }

    console.log(exerciseDetail)
    fetchExercisesData()
  }, [id])

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      const youtubeVideo = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`, youtubeOptions)
      setYoutubeVideos(youtubeVideo.contents)
      console.log(youtubeVideos)
    }

    fetchYoutubeVideos()
  }, [exerciseDetail])

  if (!youtubeVideos.length) return 'loading...'

  return (
    <Box>
      <Typography variant="h5" mt="1rem" ml="1rem" textTransform="capitalize" sx={{ fontFamily: 'Tiro Gurmukhi' }}>
        {exerciseDetail.name}
      </Typography>
      <Stack height="60vh" display="flex" direction={isMobile ? 'row' : 'column'}>
        <Box>
          <img height="100%" src={exerciseDetail.gifUrl} alt="exercise gif" />
        </Box>
        <Box >
          <Box ml="2rem" display="flex" alignItems="center" >
            <FitnessCenterIcon />
            <Typography ml="10px" variant="h6" textTransform="capitalize" color="#0B787C">
              {exerciseDetail.bodyPart} ({exerciseDetail.target})
            </Typography>
          </Box>
          <Box mb="2rem" ml="2rem" display="flex" alignItems="center" >
            <FitnessCenterIcon />
            <Typography ml="10px" variant="h6" textTransform="capitalize" color="#0B787C" >
              {exerciseDetail.equipment}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box width="100%" >
        <Typography backgroundColor="#dddddd" p='1rem' sx={{ fontFamily: 'Tiro Gurmukhi', variant: { lg: 'h4', md: 'h5', sm: 'h6' } }} lineHeight="150%" >
          Great exercise to make your {exerciseDetail.target} shredded. Keep grinding :)
          <br />
          <br />
          Below you can find some videos with {exerciseDetail.name} exercise. Good luck!
        </Typography>
        <Box sx={{ marginTop: { lg: '40px', xs: '20px' } }} p="20px">
          <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
            {youtubeVideos?.slice(0, 4)?.map((item, index) => (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img style={{ borderTopLeftRadius: '20px' }} src={item?.video?.thumbnails[0]?.url} alt={item?.video?.title} />
                <Box>
                  <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000" overflow="hidden">
                    <p></p>
                    {item?.video?.title}
                  </Typography>
                  <Typography overflow="hidden" fontSize="14px" color="#000">
                    {item?.video?.channelName}
                  </Typography>
                </Box>
              </a>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box >
  )
}

export default ExerciseDetails