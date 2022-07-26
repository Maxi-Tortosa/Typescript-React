import { Sup } from '../types';
import { useReducer } from 'react';

interface FormState {
	inputValues: Sup;
}

const INITIAL_STATE = {
	nick: '',
	supMonths: 0,
	avatar: '',
	description: '',
};

type formReducerAction =
	| { type: 'change_value'; payload: { inputName: string; inputValue: string } }
	| { type: 'clear' };

const formReducer = (
	state: FormState['inputValues'],
	action: formReducerAction
) => {
	switch (action.type) {
		case 'change_value':
			const { inputName, inputValue } = action.payload;
			return { ...state, [inputName]: inputValue };

		case 'clear':
			return INITIAL_STATE;

		default:
			return state;
	}
};

const useNewSupForm = () => {
	return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSupForm;
