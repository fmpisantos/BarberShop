import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Button from '@components/Button';
import ItemList from '@components/ItemList';
import BottomModal from '@components/BottomModal';

export default function ModalServices(props) {
	return (
		<BottomModal {...props} visible={props.control.modal == 0}>
			<ScrollView>
				{props.servicos.map((item,key)=>
						<>
							<ItemList {...props} item={item} idx={key}/>
							<View style={props.style.spacingHalf}/>
						</>
				)}
			</ScrollView>
			<View style={props.style.row}>
				<View style={{width: "100%",paddingVertical: "2%"}}>
					<Button
						style={{borderRadius: 10}}
						color={props.style.background1.backgroundColor}
						textColor={"white"}
						onPress={props.closeModal}
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
		</BottomModal>
	);
}
