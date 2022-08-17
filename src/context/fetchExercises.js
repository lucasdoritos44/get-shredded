import { createContext, useContext, useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'

export const FetchExercises = createContext()
export const SearchedContext = createContext()
export const SetSearchedContext = createContext()
export const BodyDataContext = createContext()
export const SetBodyDataContext = createContext()


export const FetchExercisesData = () => {
  return useContext(FetchExercises)
}
export const SearchedContextData = () => {
  return useContext(SearchedContext)
}
export const SetSearchedContextData = () => {
  return useContext(SetSearchedContext)
}
export const BodyDataData = () => {
  return useContext(BodyDataContext)
}
export const SetBodyDataData = () => {
  return useContext(SetBodyDataContext)
}

export const FetchExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([])
  const [searchedExercises, setSearchedExercises] = useState([])
  const [bodyData, setBodyData] = useState({
    age: Number,
    gender: 'male',
    weight: Number,
    height: Number,
    neck: Number,
    waist: Number,
    hip: Number
  })

  useEffect(() => {
    const fetchExercises = async () => {
      const fetchExercisesData =
        await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      setExercises(fetchExercisesData)
    }

    fetchExercises()
  }, [])



  return (
    <FetchExercises.Provider value={exercises}>
      <SearchedContext.Provider value={searchedExercises}>
        <SetSearchedContext.Provider value={setSearchedExercises}>
          <BodyDataContext.Provider value={bodyData}>
            <SetBodyDataContext.Provider value={setBodyData}>
              {children}
            </SetBodyDataContext.Provider>
          </BodyDataContext.Provider>
        </SetSearchedContext.Provider>
      </SearchedContext.Provider>
    </FetchExercises.Provider>)
}

