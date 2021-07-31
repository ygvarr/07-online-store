import { combineReducers } from 'redux'
import filtersReduccer from './filters'
import pizzazReduccer from './pizzas'

const rootReducer = combineReducers({
  filters: filtersReduccer,
  pizzas: pizzazReduccer,
})

export default rootReducer
