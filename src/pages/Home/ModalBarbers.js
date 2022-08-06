import React from 'react';
import { View, ScrollView } from 'react-native';
import BottomModal from "@components/BottomModal";
import BarberIcon from "@components/BarberIcon";

export default function ModalBarbers(props) {
	return (
		<BottomModal {...props} visible={props.control.modal == 1}>
			<ScrollView scrollEnabled>
					{props.barbers.map((item,key)=>{
						let i = key*3;
						if(i <= props.barbers.length){
							return(
							<View style={[props.style.row]} key={key}>
								<View style={props.style.col05} />
								<View style={props.style.col3}>
									{i<props.barbers.length&&
										<BarberIcon selectBarber={(idx)=>props.selectBarber(idx)} style={props.style} control={props.control} barbers={props.barbers} index={i} />
									}
								</View>
								<View style={props.style.col3}>
									{i+1<props.barbers.length&&
										<BarberIcon selectBarber={(idx)=>props.selectBarber(idx)} style={props.style} control={props.control} barbers={props.barbers} index={i+1} />
									}
								</View>
								<View style={props.style.col3}>
									{i+2<props.barbers.length&&
										<BarberIcon selectBarber={(idx)=>props.selectBarber(idx)} style={props.style} control={props.control} barbers={props.barbers} index={i+2} />
									}
								</View>
								<View style={props.style.col05} />
							</View>)
						}
					})}
			</ScrollView>
		</BottomModal>
	);
}
