import { useState } from 'react';
import { FormProvider } from '../../context/FormContext';
import FinalScreen from '../Screens/FinalScreen/FinalScreen';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import SecondScreen from '../Screens/SecondScreen/SecondScreen';
import ThirdScreen from '../Screens/ThirdScreen/ThirdScreen';
import styles from './App.module.css';

function App() {
	const [screen, setScreen] = useState(1);

	const next = () => setScreen(screen + 1);
	const prev = () => setScreen(screen - 1);

	return (
		<div className={styles.wrapper}>
			{screen !== 4 && <h1>🥵🥵🥵</h1>}
			<FormProvider>
				{screen === 1 && <FirstScreen next={next} />}
				{screen === 2 && <SecondScreen next={next} prev={prev} />}
				{screen === 3 && <ThirdScreen next={next} prev={prev} />}
				{screen === 4 && <FinalScreen />}
			</FormProvider>
		</div>
	);
}

export default App;
