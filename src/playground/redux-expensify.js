import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// expenses reducer

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id)
    default:
      return state
  }  
}

// filter reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}


// store

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
}) 

const ep1 = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const ep2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))


store.dispatch(removeExpense({ id: ep1.expense.id }))

const demoState = {
  expenses: [{
    id: 'asogjsdlehfs',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

