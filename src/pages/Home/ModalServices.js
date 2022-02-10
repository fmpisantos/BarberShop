import React from 'react';
import { Text, View, Modal, ScrollView } from 'react-native';
import Button from '@components/Button';
import ItemList from '@components/ItemList';
import { Ionicons } from '@expo/vector-icons';

export default function ModalServices(props) {
	return (
		<Modal
				animationType="slide"
				transparent={true}
				visible={props.control.modal == 0}
				onRequestClose={props.closeModal}
			>
				<View style={props.style.modalContainer}>
					<View style={props.style.modalView}>
						<ScrollView>
							{props.servicos.map((item,key)=>
									<>
										<ItemList {...props} item={item} idx={key}/>
										<View style={props.style.spacingHalf}/>
									</>
							)}
						</ScrollView>
						<View style={props.style.row}>
							<View style={{width: "20%",padding: "2%"}}>
								<Button
									color="gray"
									textColor={"white"}
									onPress={props.closeModal}
									{...props}
									component={<Ionicons name="arrow-undo-outline" size={24} color="black" />}
								/>
							</View>
							<View style={{width: "85%",padding: "2%"}}>
								<Button
									color={props.style.background1.backgroundColor}
									textColor={"white"}
									onPress={()=>{props.nextState(2);props.closeModal()}}
									{...props}
									component={
									<View style={[props.style.row]}>
										<View style={{paddingHorizontal: "10%"}}>
											<Text>{props.fromNumberToString(props.control.total)}</Text>
										</View>
										<View style={{paddingHorizontal: "10%"}}>
											<Text>{props.lang.confirmar}</Text>
										</View>
									</View>
									}
								/>
							</View>
						</View>
					</View>
				</View>
			</Modal>
	);
}
