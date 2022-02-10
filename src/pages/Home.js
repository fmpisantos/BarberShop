import React from 'react';
import { Text, View, Image, Modal } from 'react-native';
import Logo from '@assets/Logo.png';
import BigButton from '@components/BigButton';
import ButtonIcon from '@components/ButtonIcon';
import { FontAwesome, Fontisto} from '@expo/vector-icons';
import ItemList from '@components/ItemList';

export default function Home(props) {
	return (
		<View style={props.style.container}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={true}
				onRequestClose={() => {
				Alert.alert("Modal has been closed.");
				setModalVisible(!modalVisible);
				}}
			>
				<View style={props.style.modalContainer}>
					<View style={props.style.modalView}>
						{props.servicos.map((item,key)=>
								<>
									<ItemList {...props} item={item} key={key}/>
									<View style={props.style.spacingHalf}/>
								</>
						)}
					</View>
				</View>
			</Modal>
			<View style={props.style.spacingHalf}/>
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
			<View style={props.style.spacing}/>
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
				onPress={()=>{if(props.control.value[1] && props.control.idx == 1)props.nextState()}}
				text={props.lang.servico}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="scissors" style={props.style.padding10H} size={24} color={props.control.value[1] ? "white": "gray"} />} {...props} active={props.control.value[1]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={props.control.value[2] ? "white": "gray"}
				onPress={()=>{if(props.control.value[2] && props.control.idx == 2)props.nextState()}}
				text={props.lang.barbeiro}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<Fontisto name="persons" style={props.style.padding10H} size={24} color={props.control.value[2] ? "white": "gray"} />} {...props} active={props.control.value[2]}/>}
				iconstyle={props.style.background1}
			/>
			<View style={props.style.spacing}/>
			<BigButton
				color="#000000"
				textColor={props.control.value[3] ? "white": "gray"}
				onPress={()=>{if(props.control.value[3] && props.control.idx == 3)props.nextState()}}
				text={props.lang.dataHora}
				{...props}
				icon={<ButtonIcon background={props.style.backgroundIcon} backgroundfaded={props.style.backgroundIconFaded} icon={<FontAwesome name="calendar-check-o" style={props.style.padding10H} size={24} color={props.control.value[3] ? "white": "gray"} />} {...props} active={props.control.value[3]}/>}
				iconstyle={props.style.background1}
			/>
		</View>
	);
}
