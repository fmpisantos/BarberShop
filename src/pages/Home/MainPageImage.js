import React from 'react';
import { Text, View, Image, } from 'react-native';
import Logo from '@assets/Logo.png';
export default function MainPageImage(props) {
	return (
		<>
			<Text style={[props.style.title,props.style.colorWhite]}>{props.lang.title1}</Text>
			<View style={props.style.spacing}/>
			<Image
				style={props.style.bigLogoStreach}
				source={Logo}
			/>
			<View style={props.style.spacingHalf}/>
			<Text style={[props.style.title,props.style.colorWhite]}>{props.lang.title2}</Text>
			<View style={props.style.spacingHalf}/>
			<Text style={[props.style.title2,props.style.colorWhite]}>{props.lang.title3}</Text>
        </>
	);
}
