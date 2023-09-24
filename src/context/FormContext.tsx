import type { ReactNode } from 'react';
import { createContext, useReducer } from 'react';
import type { IAction, IContextProps, IState } from '../types/default';

const initialState: IState = {
	email: '',
	agreeToDataProcessing: false,
	name: '',
	password: '',
	phoneNumber: '',
	agreeToMailing: false
};

function reducer(state: IState, action: IAction) {
	switch (action.type) {
		case 'SET_FIELD':
			return { ...state, [action.field]: action.value };
		default:
			return state;
	}
}

export const FormContext = createContext<IContextProps>({
	state: initialState,
	dispatch: () => null
});

export function FormProvider({ children }: { readonly children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<FormContext.Provider value={{ state, dispatch }}>
			{children}
		</FormContext.Provider>
	);
}
