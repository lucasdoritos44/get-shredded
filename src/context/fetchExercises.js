import { createContext, useContext, useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'

export const FetchExercises = createContext()
export const SearchedContext = createContext()
export const SetSearchedContext = createContext()


export const FetchExercisesData = () => {
  return useContext(FetchExercises)
}
export const SearchedContextData = () => {
  return useContext(SearchedContext)
}
export const SetSearchedContextData = () => {
  return useContext(SetSearchedContext)
}


export const FetchExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([])
  const [searchedExercises, setSearchedExercises] = useState([])

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
          {children}
        </SetSearchedContext.Provider>
      </SearchedContext.Provider>
    </FetchExercises.Provider>)
}

