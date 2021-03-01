// import projectsReducer from './projectsReducer'
import cardsReducer from './cardsReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    cards: cardsReducer,
    // audios: audioReducer
})