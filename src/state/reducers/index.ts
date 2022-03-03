import repositoriesReducer from './repositoriesReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
 repositories:repositoriesReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>