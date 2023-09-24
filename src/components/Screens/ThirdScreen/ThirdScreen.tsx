import type { ChangeEvent, FC } from 'react';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import type { IMiddleScreenProps } from '../../../types/default';
import styles from '../Screen.module.css';

const ThirdScreen: FC<IMiddleScreenProps> = ({ next, prev }) => {
	const { state, dispatch } = useContext(FormContext);

	const handleCheckboxChange =
		(field: keyof typeof state) => (_e: ChangeEvent<HTMLInputElement>) => {
			dispatch({ type: 'SET_FIELD', field, value: _e.target.checked });
		};

	const isRuDomain = state.email.endsWith('.ru');

	return (
		<>
			<div className={styles['additional-paragraph']}>
				<p>
					{isRuDomain ? 'Text for .ru domain' : 'Text for non-.ru domain'}
				</p>
			</div>
			<div className={styles['agreement-checkbox']}>
				<label htmlFor="">
					<input
						type="checkbox"
						defaultChecked={state.agreeToMailing}
						onChange={handleCheckboxChange('agreeToMailing')}
					/>
					Agree to mailing
				</label>
			</div>
			<button type="button" onClick={prev}>
				Previous
			</button>
			<button type="button" onClick={next}>
				Next
			</button>
		</>
	);
};

export default ThirdScreen;
