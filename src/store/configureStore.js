import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'

// store

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
  )

  return store
}