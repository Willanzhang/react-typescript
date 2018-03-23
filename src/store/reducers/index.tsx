// import { EnthusiasmAction, StateFlag } from '../actions'
import { EnthusiasmAction } from '../actions'
import { StoreState } from '../types/index'
// import { routerReducer } from 'react-router-redux'
// import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_FLAG } from '../constants/index'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index'
// import { combineReducers } from 'redux'

console.log(EnthusiasmAction, 'EnthusiasmAction9999999')
function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
  }
  return state
}
// function changeFlag(state: StoreState, action: StateFlag): StoreState {
//   switch (action.type) {
//     case CHANGE_FLAG:
//       return { ...state, flag: !state.flag }
//   }
//   return state
// }
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