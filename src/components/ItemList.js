import React from 'react';
import { Text, View } from 'react-native';
import {
	Checkbox
  } from 'react-native-material-kit';

export default function ItemList(props){

	

    return(
        <View style={[props.style.row,{backgroundColor: "rgba(0,0,0,0.1)", width:"100%", padding: "2%"},props.style.centerVerticaly]} >
            <View style={{width: "20%"}}>
                <Text>
                    {props.item.name}
                </Text>
            </View>
            <View style={[{width: "70%"},props.style.fixRight]}>
                <Text>{props.fromNumberToString(props.item.price)}</Text>
                <Text>{props.item.time}</Text>
            </View>
            <View style={{width:"10%"}}>
                <Checkbox
                    fillColor={props.style.background1.backgroundColor}
                    borderOnColor={props.style.background1.backgroundColor}
                    useNativeDriver={true}
                    checked={props.control.servicosAtivos[props.idx]}
                    onCheckedChange={()=>{
                        if(props.control.servicosAtivos[props.idx])
                            props.removeService({servico:props.idx,total:props.item.price})
                        else
                            props.addService({servico:props.idx,total:props.item.price})
                    }}
                />
            </View>
        </View>
    );
};