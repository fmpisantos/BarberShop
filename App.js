import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();

// Langs
const lang = require('@langs/ptpt.json')

// Styles
import styles from '@styles/style';

//Pages
import Home from '@pages/Home';
import About from '@pages/About';

// Components

// Store
import { Provider } from 'react-redux'
import store from '@store/store'
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount, state } from '@store/counter';

const App = () => {
	const navigationRef = useNavigationContainerRef();
	const counter = useSelector(state);
	const dispatch = useDispatch();
	const _increment = () => dispatch(increment());
	const _incrementByAmount = (amount) => {
		dispatch(incrementByAmount(amount));
	};

	return (
		<NavigationContainer ref={navigationRef} headerMode={null}>
			<StatusBar backgroundColor={styles.background1.backgroundColor}/>
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
							lang={lang}
							counter={counter}
							increment={_increment}
							incrementByAmount={_incrementByAmount}
							style={styles}
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
