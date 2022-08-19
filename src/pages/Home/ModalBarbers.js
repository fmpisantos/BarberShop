import React from 'react';
import { View, ScrollView } from 'react-native';
import BottomModal from "@components/BottomModal";
import BarberIcon from "@components/BarberIcon";

export default function ModalBarbers(props) {
	let servicoAtivo = undefined;
	props.control.servicosAtivos.forEach((element,key) => {
		if(element)
			servicoAtivo = props.servicos[key];
	});
	let activeBarbers = [];
	if(servicoAtivo)
		props.barbers.forEach((element) => {
			if(element.services.find(elem => elem === servicoAtivo.id))
				activeBarbers.push(element);
		});
	return (
		<BottomModal {...props} visible={props.control.modal == 1}>
			<ScrollView scrollEnabled>
					{activeBarbers.map((item,key)=>{
						let i = key*3;
						if(i <= activeBarbers.length){
							return(
							<View style={[props.style.row]} key={key}>
								<View style={props.style.col05} />
								<View style={props.style.col3}>
									{i<activeBarbers.length&&
										<BarberIcon selectBarber={(idx)=>props.selectBarber(idx)} style={props.style} control={props.control} barbers={activeBarbers} index={i} />
									}
								</View>
								<View style={props.style.col3}>
									{i+1<activeBarbers.length&&
										<BarberIcon selectBarber={(idx)=>props.selectBarber(idx)} style={props.style} control={props.control} barbers={activeBarbers} index={i+1} />
									}
								</View>
								<View style={props.style.col3}>
									{i+2<activeBarbers.length&&
										<BarberIcon selectBarber={(idx)=>props.selectBarber(idx)} style={props.style} control={props.control} barbers={activeBarbers} index={i+2} />
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
