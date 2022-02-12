import React from 'react';
import { View } from 'react-native';

export default function ButtonIcon(props) {
	return (
		<View
			style={[
				props.style.center,
				props.active ? props.background : props.backgroundfaded,
				props.style.margin10R,
				{ minHeight: '100%', borderRadius: 10 }
			]}
		>
			{props.icon}
		</View>
	);
}
