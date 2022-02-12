import React from 'react';
import { View } from 'react-native';

import ModalServices from './ModalServices';
import MainPageImage from './MainPageImage';
import MainPageButtons from './MainPageButtons';
import ModalBarbers from './ModalBarbers';
import ModalDate from './ModalDate';

export default function Home(props) {
	return (
		<View style={props.style.container}>
			<ModalServices {...props} />
			<ModalBarbers {...props} />
			<ModalDate {...props} />
			<View style={props.style.spacing} />
			<MainPageImage {...props} />
			<View style={props.style.spacing} />
			<MainPageButtons {...props} />
		</View>
	);
}
