// import { EnthusiasmAction, StateFlag } from '../actions'
import { EnthusiasmAction, StateFlag, Language } from '../actions'
import { StoreState } from '../types/index'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_LANGUAGE, CHANGE_FLAG } from '../constants/index'
import { combineReducers } from 'redux'
// 必须给store 的数据设置初始值 defaultState
import defaultState from '../types/initState'

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
console.log('110')
// combineReducers<StoreState> 至关重要
const enthusiasm = combineReducers<StoreState>({
  enthusiasmLevel,
  flag,
  languageName
})

export default enthusiasm;