import * as constants from '../constants'
export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}
export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}
export interface ChanageFlag {
	type: constants.CHANGE_FLAG
}
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm
export type StateFlag = ChanageFlag

export function incrementEnthusiasm(): IncrementEnthusiasm {
	return {
		type: constants.INCREMENT_ENTHUSIASM
	}
}
export function decrementEnthusiasm(): DecrementEnthusiasm {
	return {
		type: constants.DECREMENT_ENTHUSIASM
	}
}

export function changeFlagX(): ChanageFlag {
	return {
		type: constants.CHANGE_FLAG
	}
}
