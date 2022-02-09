import React from 'react';
import { Text, View, Image } from 'react-native';
import Logo from '@assets/Logo.png';
import BigButton from '@components/BigButton';
import ButtonIcon from '@components/ButtonIcon';
import { FontAwesome5, FontAwesome, Fontisto} from '@expo/vector-icons';
export default function Home(props) {
	const active = [true,false,false,false]
	return (
		<View style={props.style.container}>
			<View style={props.style.spacing}/>
			<Text style={[props.style.title,props.style.colorWhite]}>{props.lang.title1}</Text>
			<Image
				style={props.style.bigLogoStreach}
				source={Logo}
			/>
			<Text style={[props.style.title,props.style.colorWhite]}>{props.lang.title2}</Text>
			<View style={props.style.spacingHalf}/>
			<Text style={[props.style.title2,props.style.colorWhite]}>{props.lang.title3}</Text>
			<View style={props.style.spacing}/>
			<BigButton
				color="#fff"
				textColor={"#000000"}
				onPress={()=>{alert("Unidade")}}
				text={props.lang.unidade}
				{...props}
				icon={<ButtonIcon icon={<FontAwesome name="home" style={props.style.padding10H} size={24} color={active[0] ? "white": "gray"} />} {...props} active={active[0]}/>}
				iconstyle={{backgroundColor: "red"}}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#fff"
				textColor={"#000000"}
				onPress={()=>{alert("Serviço")}}
				text={props.lang.servico}
				{...props}
				icon={<ButtonIcon icon={<FontAwesome name="scissors" style={props.style.padding10H} size={24} color={active[0] ? "white": "gray"} />} {...props} active={active[0]}/>}
				iconstyle={{backgroundColor: "red"}}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#fff"
				textColor={"#000000"}
				onPress={()=>{alert("Barbeiro")}}
				text={props.lang.barbeiro}
				{...props}
				icon={<ButtonIcon icon={<Fontisto name="persons" style={props.style.padding10H} size={24} color={active[0] ? "white": "gray"} />} {...props} active={active[0]}/>}
				iconstyle={{backgroundColor: "red"}}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#fff"
				textColor={"#000000"}
				onPress={()=>{alert("Data e Hora")}}
				text={props.lang.dataHora}
				{...props}
				icon={<ButtonIcon icon={<FontAwesome name="calendar-check-o" style={props.style.padding10H} size={24} color={active[0] ? "white": "gray"} />} {...props} active={active[0]}/>}
				iconstyle={{backgroundColor: "red"}}
			/>
		</View>
	);
}
