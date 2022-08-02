import React from 'react';
import {View, Button, Platform, Text, TouchableOpacity, AsyncStorage} from 'react-native';

import ModalServices from './ModalServices';
import MainPageImage from './MainPageImage';
import MainPageButtons from './MainPageButtons';
import ModalBarbers from './ModalBarbers';
import ModalDate from './ModalDate';
import ModalLogin from "../Login/ModalLogin";
import BorderButton from "../../components/BorderButton";

export default function Home(props) {
	return (
		<View style={[props.style.container, props.style.fix]}>
			{Platform.OS === 'ios' ? (
				<View style={props.style.spacingx2}/>
			) : (
				<View style={props.style.spacing}/>
			)}
			<View style={[props.style.row, props.style.center]}>
				<View style={props.style.col3}>
					{props.loginState.logged && (
						<View style={props.style.centerVerticaly}>
							<Text>{props.name}</Text>
						</View>
					)}
					<BorderButton style={props.style} borderColor={"#000000"} function={() => {
						if (props.loginState.logged) {
							props.clearUser();
							AsyncStorage.clear();
							return;
						}
						props.openModal(-2)
					}} text={props.loginState.logged ? props.lang.functionLogout : props.lang.functionLogin}/>
				</View>
				<View style={props.style.col4}>
					<Text style={[props.style.title, props.style.colorWhite]}>{props.lang.title1}</Text>
				</View>
				<View style={props.style.col3}>
					<BorderButton style={props.style} borderColor={"#000000"} function={() => {
						props.navigation.navigate("ScheduleViewer");
					}} text={props.lang.agenda}/>
				</View>
			</View>
			<ModalLogin {...props} />
			<ModalServices {...props} />
			<ModalBarbers {...props} />
			<ModalDate {...props} />
			<View style={props.style.spacing}/>
			<MainPageImage {...props} />
			<View style={props.style.spacing}/>
			<MainPageButtons {...props} />
		</View>
	);
}
