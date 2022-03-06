import React from 'react';
import { View } from 'react-native';
import BigButton from '@components/BigButton';
import ButtonIcon from '@components/ButtonIcon';
import { FontAwesome, Fontisto} from '@expo/vector-icons';
import Moment from 'moment';

export default function MainPageButtons(props) {

	const reservar = () => {
		let duration = 0
		Moment().month()
		for(let i in props.control.servicosAtivos){
			if(props.control.servicosAtivos[i]){
				let date = Moment(`${props.control.dateSelected.year}-${props.control.dateSelected.month}-${props.control.dateSelected.day} ${props.control.dateSelected.hours}:${props.control.dateSelected.minutes}`)
				date = date.add(duration,'m');
				let request = {
					"serviceId": parseInt(i)+1,
					"shopId": 1,
					"barberId": props.control.barber+1,
					"clientId": 2,
					"dateTime": date
				}

				fetch(`${props.url}/history`,{
					headers: {
						'Content-Type': 'application/json'
					},
					method: "POST",
					body: JSON.stringify(request)
				})
				.then(response=>response.json())
				.then((json)=>{
					duration += props.servicos[i].duration;
				})
				.catch(err=>alert(err))
			}
		}
	}

	return (
        <>
			{/* 
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
			*/}
			<BigButton
				color="#000000"
				textColor={props.control.value[1] ? "white": "gray"}
				onPress={()=>{if(props.control.value[1])props.openModal(0)}}
				text={props.lang.servico}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="scissors" style={props.style.padding10H} size={24} color={props.control.value[1] ? "white": "gray"} />} {...props} active={props.control.value[1]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={props.control.value[2] ? "white": "gray"}
				onPress={()=>{if(props.control.value[2])props.openModal(1)}}
				text={props.lang.barbeiro}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<Fontisto name="persons" style={props.style.padding10H} size={24} color={props.control.value[2] ? "white": "gray"} />} {...props} active={props.control.value[2]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={props.control.value[3] ? "white": "gray"}
				onPress={()=>{if(props.control.value[3])props.openModal(2)}}
				text={props.lang.dataHora}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="calendar-check-o" style={props.style.padding10H} size={24} color={props.control.value[3] ? "white": "gray"} />} {...props} active={props.control.value[3]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={props.control.value[4] ? "white": "gray"}
				onPress={()=>{if(props.control.value[4]){reservar()}}}
				text={props.lang.reservar}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="save" style={props.style.padding10H} size={24} color={props.control.value[4] ? "white": "gray"} />} {...props} active={props.control.value[4]}/>}
				iconstyle={props.style.background1}
			/>
		</>
	);
}
