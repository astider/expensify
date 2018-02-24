import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set expensesReducer default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})


test('should add expense', () => {
  const expense = {
    id: '109',
    description: 'Coffee',
    amount: 99000,
    note: 'morning coffee',
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

// test('should edit expense with provided id', () => {
//   const id = expenses[0].id
//   const updates = {
//     description: 'Chocolate',
//     amount: 256,
//     note: '',
//     createdAt: -90
//   }
//   const action = {
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
//   }
//   const state = expensesReducer(expenses, action)
//   expect(state[0]).toEqual({ id, ...updates })
// })

test('should edit expense with provided id', () => {
  const amount = 559000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})

// test('should not edit expense if id not found', () => {
//   const id = '-1'
//   const updates = {
//     description: 'Chocolate',
//     amount: 256,
//     note: '',
//     createdAt: -90
//   }
//   const action = {
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
//   }
//   const state = expensesReducer(expenses, action)
//   expect(state).toEqual(expenses)
// })

test('should not edit expense if id not found', () => {
  const amount = 559000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-9',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})