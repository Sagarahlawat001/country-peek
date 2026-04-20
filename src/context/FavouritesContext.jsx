import { createContext, useReducer, useEffect, useContext } from 'react'

// 1. Reducer — ADD_FAVOURITE and REMOVE_FAVOURITE
function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      // Guard against duplicates
      if (state.some((c) => c.cca3 === action.payload.cca3)) {
        return state
      }
      return [...state, action.payload]
    case 'REMOVE_FAVOURITE':
      return state.filter((c) => c.cca3 !== action.payload)
    default:
      return state
  }
}

// 2. Create context
const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  // 3. Load initial state from localStorage
  const savedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]')

  // 4. useReducer
  const [favourites, dispatch] = useReducer(favouritesReducer, savedFavourites)

  // 5. useEffect — save to localStorage on every change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  // 6. Return Provider
  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

// 7. Custom hook
export function useFavourites() {
  const context = useContext(FavouritesContext)
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider')
  }
  return context
}
