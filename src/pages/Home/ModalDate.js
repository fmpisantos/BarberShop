import React, { useState } from 'react';
import BottomModal from '@components/BottomModal';
import Calendar from '@components/Calendar';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Button from '@components/Button'

export default function ModalDate(props) {
	const [ timesheet, setTimesheet ] = useState([]);
	return (
		<BottomModal {...props} visible={props.control.modal == 2}>
			<Calendar {...props} setTimesheet={setTimesheet} />
			<ScrollView scrollEnabled horizontal>
				{timesheet.map((item, key) => {
					return (
						<View key={key} style={{padding: 10}}>
							<TouchableOpacity  style={[ props.style.dateselect ]}>
								<Text style={props.style.center}>{item.string}</Text>
							</TouchableOpacity>
						</View>
					);
				})}
			</ScrollView>
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
							<Text>{props.lang.confirmar}</Text>
						</View>
					</View>
					}
				/>
				</View>
		</BottomModal>
	);
}
