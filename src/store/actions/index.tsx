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

export interface ChanageLanguage {
	type: constants.CHANGE_LANGUAGE,
	languageName: string
}
export type StateFlag = ChanageFlag
export type Language = ChanageLanguage
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm


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

export function changLanguage(lang: string): ChanageLanguage {
	return {
		type: constants.CHANGE_LANGUAGE,
		languageName: lang
	}
}
