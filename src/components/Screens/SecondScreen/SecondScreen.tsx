import type { ChangeEvent, FC } from 'react';
import { useContext, useState } from 'react';
import { FormContext } from '../../../context/FormContext';
import type { IMiddleScreenProps } from '../../../types/default';
import { isRuPhoneValidNumber } from '../../../utils/validators';
import styles from '../Screen.module.css';

const SecondScreen: FC<IMiddleScreenProps> = ({ next, prev }) => {
	const { state, dispatch } = useContext(FormContext);
	const [error, setError] = useState('');

	const handleInputChange =
		(field: keyof typeof state) => (_e: ChangeEvent<HTMLInputElement>) => {
			dispatch({ type: 'SET_FIELD', field, value: _e.target.value });

			if (field === 'phoneNumber') {
				if (isRuPhoneValidNumber(_e.target.value)) {
					setError('');
				} else {
					setError(`Please enter a valid phone number.`);
				}
			} else {
				setError('');
			}
		};

	const handleCheckboxChange =
		(field: keyof typeof state) => (_e: ChangeEvent<HTMLInputElement>) => {
			dispatch({ type: 'SET_FIELD', field, value: _e.target.checked });
		};

	const { name, password, phoneNumber, agreeToDataProcessing } = state;
	const isRuDomain = state.email.endsWith('.ru');
	const isDisabled =
		(isRuDomain ? !phoneNumber : !agreeToDataProcessing) ||
		!name ||
		!password ||
		Boolean(error);

	return (
		<form action="">
			{error && (
				<div className={styles['invalid-input']}>
					<p>{error}</p>
				</div>
			)}
			{isRuDomain && (
				<div className={styles['input-box']}>
					<input
						required
						type="text"
						defaultValue={phoneNumber}
						placeholder="Phone Number"
						onChange={handleInputChange('phoneNumber')}
					/>
					<i className="material-symbols-outlined">call</i>
				</div>
			)}
			<div className={styles['input-box']}>
				<input
					required
					type="text"
					defaultValue={state.name}
					placeholder="Name"
					onChange={handleInputChange('name')}
				/>
				<i className="material-symbols-outlined">person</i>
			</div>
			<div className={styles['input-box']}>
				<input
					required
					type="password"
					defaultValue={state.password}
					placeholder="Password"
					onChange={handleInputChange('password')}
				/>
				<i className="material-symbols-outlined">lock</i>
			</div>
			{!isRuDomain && (
				<div className={styles['agreement-checkbox']}>
					<label htmlFor="">
						<input
							required
							type="checkbox"
							defaultChecked={state.agreeToDataProcessing}
							onChange={handleCheckboxChange('agreeToDataProcessing')}
						/>
						Agree to data processing
					</label>
				</div>
			)}
			<button type="button" onClick={prev}>
				Previous
			</button>
			<button type="button" onClick={next} disabled={isDisabled}>
				Next
			</button>
		</form>
	);
};

export default SecondScreen;
