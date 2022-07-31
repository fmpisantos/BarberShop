import React from 'react';
import { View, Button, Platform } from 'react-native';

import ModalServices from './ModalServices';
import MainPageImage from './MainPageImage';
import MainPageButtons from './MainPageButtons';
import ModalBarbers from './ModalBarbers';
import ModalDate from './ModalDate';

export default function Home(props) {

	return (
		<View style={[props.style.container, props.style.fix]}>
			<View style={{ position: 'absolute', top: (Platform.OS === 'ios' ? 20 : 0) +10, right: 10 }}>
				<Button title="Barberiro" color="#000000" onPress={()=> {
					props.navigation.navigate("ScheduleViewer");
				}}/>
			</View>
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
