import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filterReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set textFilter to provided text', () => {
  const text = 'new filter text'
  const action = { 
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filterReducer(undefined, action)
  expect(state.text).toBe(text)
})

test('should set startDate to provided date', () => {
  const startDate = moment()
  const action = { 
    type: 'SET_START_DATE',
    startDate
  }
  const state = filterReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
})

test('should set endDate to provided date', () => {
  const endDate = moment()
  const action = { 
    type: 'SET_END_DATE',
    endDate
  }
  const state = filterReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
})