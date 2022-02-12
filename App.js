import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();

// Langs
const lang = require('@langs/ptpt.json');
const servicos = require('@assets/servicos.json');
const barbers = require('@assets/barbers.json');
const schedules = require('@assets/schedules.json');

// Styles
import styles from '@styles/style';

//Pages
import Home from '@pages/Home/Home';
import About from '@pages/About';
import ScheduleViewer from '@pages/ScheduleViewer';

// Components

// Store
import { Provider } from 'react-redux';
import store from '@store/store';
import { useSelector, useDispatch } from 'react-redux';
import { replace, removeService, addService, openModal, closeModal, state, selectBarber } from '@store/create/state';

const App = () => {
	const navigationRef = useNavigationContainerRef();
	const control = useSelector(state);
	const dispatch = useDispatch();
	const _replace = (state) => {
		dispatch(replace(state));
	};
	const _closeModal = () => dispatch(closeModal());
	const _openModal = (id) => {
		dispatch(openModal(id));
	};
	const _addService = (id) => {
		dispatch(addService(id));
	};
	const _removeService = (id) => {
		dispatch(removeService(id));
	};
	const _selectBarber = (id) => {
		dispatch(selectBarber(id));
	};
	console.disableYellowBox = true;
	const fromNumberToString = (number) => {
		return `${number.toFixed(2)}€`;
	};
	return (
		<NavigationContainer ref={navigationRef} headerMode={null}>
			<StatusBar backgroundColor={styles.background1.backgroundColor} />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: { display: 'none' }
				}}
				initialRouteName="Home"
			>
				<Stack.Screen name="Home">
					{(props) => (
						<Home
							{...props}
							servicos={servicos}
							barbers={barbers}
							schedules={schedules}
							lang={lang}
							control={control}
							replace={_replace}
							style={styles}
							closeModal={_closeModal}
							openModal={_openModal}
							addService={_addService}
							removeService={_removeService}
							fromNumberToString={fromNumberToString}
							selectBarber={_selectBarber}
						/>
					)}
				</Stack.Screen>
				<Stack.Screen name="About">
					{(props) => (
						<About
							{...props}
							lang={lang}
							counter={counter}
							increment={_increment}
							incrementByAmount={_incrementByAmount}
							style={styles}
						/>
					)}
				</Stack.Screen>

				<Stack.Screen name="ScheduleViewer">
					{(props) => <ScheduleViewer {...props} lang={lang} style={styles} servicos={servicos} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default function AppWrapper() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
