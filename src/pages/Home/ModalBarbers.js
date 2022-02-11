import React from 'react';
import { View, Modal, ScrollView, Image, Text,TouchableOpacity } from 'react-native';

export default function ModalBarbers(props) {
	console.log(props.control)
	return (
		<Modal
				animationType="slide"
				transparent={true}
				visible={props.control.modal == 1}
				onRequestClose={props.closeModal}
			>
				<View style={props.style.modalContainer}>
					<View style={props.style.modalView}>
						<ScrollView>
								{props.barbers.map((item,key)=>{
									let i = key*3;
									if(i <= props.barbers.length){
										return(
										<View style={props.style.row} >
											{i<props.barbers.length&&
												<TouchableOpacity onPress={()=>props.selectBarber(i)} key={i} style={[props.style.center,props.style.fixTop,{padding: "5%",width:"33%"},props.control.barber === i?{borderWidth: 2,borderStyle: 'solid',borderColor: "#fff",borderBottomColor: props.style.background1.backgroundColor}:{}]}>
													<Image style={props.style.barberImage} source={require("@assets/Logo.png")} />
													<Text style={{textAlign: 'center'}}>{props.barbers[i].name}</Text>
												</TouchableOpacity>
											}
											{i+1<props.barbers.length&&
												<TouchableOpacity key={i+1} onPress={()=>props.selectBarber(i+1)} style={[props.style.center,props.style.fixTop,{padding: "5%",width:"33%"},props.control.barber === i+1?{borderWidth: 2,borderStyle: 'solid',borderColor: "#fff",borderBottomColor: props.style.background1.backgroundColor}:{}]}>
													<Image style={props.style.barberImage} source={require("@assets/Logo.png")} />
													<Text>{props.barbers[i+1].name}</Text>
												</TouchableOpacity>
											}
											{i+2<props.barbers.length&&
												<TouchableOpacity key={i+2} onPress={()=>props.selectBarber(i+2)} style={[props.style.center,props.style.fixTop,{padding: "5%",width:"33%"},props.control.barber === i+2?{borderWidth: 2,borderStyle: 'solid',borderColor: "#fff",borderBottomColor: props.style.background1.backgroundColor}:{}]}>
													<Image style={props.style.barberImage} source={require("@assets/Logo.png")} />
													<Text>{props.barbers[i+2].name}</Text>
												</TouchableOpacity>
											}
										</View>)
									}
								})}
						</ScrollView>
					</View>
				</View>
			</Modal>
	);
}
