// import { EnthusiasmAction, StateFlag } from '../actions'
import { EnthusiasmAction, StateFlag, Language } from '../actions'
import { StoreState } from '../types/index'
// import { routerReducer } from 'react-router-redux'
// import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_FLAG } from '../constants/index'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_LANGUAGE, CHANGE_FLAG } from '../constants/index'
import { combineReducers } from 'redux'
import defaultState from '../types/initState'

// console.log(EnthusiasmAction, 'EnthusiasmAction9999999')
function enthusiasmLevel(state = defaultState.enthusiasmLevel, action: EnthusiasmAction): number {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return state + 1 
    case DECREMENT_ENTHUSIASM:
      return Math.max(1, state - 1)
  }
  return state
}

function languageName(state = defaultState.languageName, action: Language): string {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.languageName
  }
  return state
}
function flag(state = defaultState.flag, action: StateFlag): boolean {
  switch (action.type) {
    case CHANGE_FLAG:
      return !state
  }
  return state
}
// function changeLang = (state = de)
console.log('110')
// combineReducers<StoreState> 至关重要
const enthusiasm = combineReducers<StoreState>({
  enthusiasmLevel,
  flag,
  languageName
})
// console.log(changeFlag, '99')
// const demo = combineReducers({
//   enthusiasm,
//   changeFlag
// })
// const rootReducer = combineReducers({
//   enthusiasm,
//   changeFlag,
//   routing: routerReducer
// });
// console.log(rootReducer, '9898989889')
export default enthusiasm;