import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

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
