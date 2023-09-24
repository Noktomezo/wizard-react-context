import type { ChangeEvent, FC } from 'react';
import { useContext, useState } from 'react';
import { FormContext } from '../../../context/FormContext.tsx';
import type { IFirstScreenProps } from '../../../types/default.ts';
import { isEmailValid } from '../../../utils/validators.ts';
import styles from '../Screen.module.css';

const FirstScreen: FC<IFirstScreenProps> = ({ next }) => {
	const { state, dispatch } = useContext(FormContext);
	const [error, setError] = useState('');

	const handleEmailChange = (_e: ChangeEvent<HTMLInputElement>) => {
		const email = _e.target.value;
		dispatch({ type: 'SET_FIELD', field: 'email', value: email });

		if (isEmailValid(email)) {
			setError('');
		} else {
			setError('Please enter a valid email');
		}
	};

	return (
		<form action="">
			{error && (
				<div className={styles['invalid-input']}>
					<p>{error}</p>
				</div>
			)}
			<div className={styles['input-box']}>
				<input
					required
					type="email"
					placeholder="example@gmail.com"
					defaultValue={state.email}
					onChange={handleEmailChange}
				/>
				<i className="material-symbols-outlined">mail</i>
			</div>

			<button
				type="button"
				className={styles.btn}
				onClick={next}
				disabled={Boolean(error) || !state.email}
			>
				Next
			</button>
		</form>
	);
};

export default FirstScreen;
