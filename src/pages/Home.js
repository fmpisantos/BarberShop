import React from 'react';
import { Text, View, Image } from 'react-native';
import Logo from '@assets/Logo.png';
import BigButton from '@components/BigButton';
import ButtonIcon from '@components/ButtonIcon';
import { FontAwesome, Fontisto} from '@expo/vector-icons';
export default function Home(props) {
	const active = [true,false,false,false]
	return (
		<View style={props.style.container}>
			<View style={props.style.spacingHalf}/>
			<Text style={[props.style.title,props.style.colorWhite]}>{props.lang.title1}</Text>
			<View style={props.style.spacing}/>
			<Image
				style={props.style.bigLogoStreach}
				source={Logo}
			/>
			<Text style={[props.style.title,props.style.colorWhite]}>{props.lang.title2}</Text>
			<View style={props.style.spacingHalf}/>
			<Text style={[props.style.title2,props.style.colorWhite]}>{props.lang.title3}</Text>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={active[0] ? "white": "gray"}
				onPress={()=>{if(active[0])alert("Unidade")}}
				text={props.lang.unidade}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="home" style={props.style.padding10H} size={24} color={active[0] ? "white": "gray"} />} {...props} active={active[0]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={active[1] ? "white": "gray"}
				onPress={()=>{if(active[1])alert("Serviço")}}
				text={props.lang.servico}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="scissors" style={props.style.padding10H} size={24} color={active[1] ? "white": "gray"} />} {...props} active={active[1]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={active[2] ? "white": "gray"}
				onPress={()=>{if(active[2])alert("Barbeiro")}}
				text={props.lang.barbeiro}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<Fontisto name="persons" style={props.style.padding10H} size={24} color={active[2] ? "white": "gray"} />} {...props} active={active[2]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={active[3] ? "white": "gray"}
				onPress={()=>{if(active[3])alert("Data e Hora")}}
				text={props.lang.dataHora}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="calendar-check-o" style={props.style.padding10H} size={24} color={active[3] ? "white": "gray"} />} {...props} active={active[3]}/>}
				iconstyle={props.style.background1}
			/>
		</View>
	);
}
