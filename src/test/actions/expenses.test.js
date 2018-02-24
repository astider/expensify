import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup removeExpense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup editExpense action object', () => {
  const action = editExpense( '123abc', { note: 'New note value'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  })
})

test('should setup addExpense action object with provided value', () => {
  const expenseData = {
    description: 'Gas Bill',
    note: 'bill of gas',
    amount: 9900,
    createdAt: 10000
  }

  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })

})

test('should setup addExpense action object with default value', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
      id: expect.any(String)
    }
  })

})