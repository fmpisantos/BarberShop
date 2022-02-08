import React from 'react';
import { Text, View, Button } from 'react-native';

export default function About(props) {
	return (
		<View style={props.style.container}>
			<Button onPress={() => props.navigation.navigate('Home')} title="Go Home" />
			<Text style={props.style.center}>About Page!</Text>
		</View>
	);
}
