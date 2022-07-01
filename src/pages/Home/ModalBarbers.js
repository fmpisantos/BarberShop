import React from 'react';
import { View, ScrollView } from 'react-native';
import BottomModal from "@components/BottomModal";
import BarberIcon from "../../components/BarberIcon";

export default function ModalBarbers(props) {
	return (
		<BottomModal {...props} visible={props.control.modal == 1}>
			<ScrollView>
					{props.barbers.map((item,key)=>{
						let i = key*3;
						if(i <= props.barbers.length){
							return(
							<View style={props.style.row} key={key}>
								{i<props.barbers.length&&
									<BarberIcon selectBarber={props.selectBarber(i)} style={props.style} control={props.control} barbers={props.barbers} index={i} />
								}
								{i+1<props.barbers.length&&
									<BarberIcon selectBarber={props.selectBarber(i)} style={props.style} control={props.control} barbers={props.barbers} index={i+1} />
								}
								{i+2<props.barbers.length&&
									<BarberIcon selectBarber={props.selectBarber(i)} style={props.style} control={props.control} barbers={props.barbers} index={i+2} />
								}
							</View>)
						}
					})}
			</ScrollView>
		</BottomModal>
	);
}
