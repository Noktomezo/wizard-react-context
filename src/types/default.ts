import type { Dispatch } from 'react';

export interface IFirstScreenProps {
	next(): void;
}

export interface IMiddleScreenProps {
	next(): void;
	prev(): void;
}

export interface IContextProps {
	dispatch: Dispatch<IAction>;
	state: IState;
}

export interface IState {
	agreeToDataProcessing: boolean;
	agreeToMailing: boolean;
	email: string;
	name: string;
	password: string;
	phoneNumber: string;
}

export interface IAction {
	field: keyof IState;
	type: 'SET_FIELD';
	value: boolean | string;
}
