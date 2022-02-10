import React from 'react';
import { Text, View } from 'react-native';

export default function ItemList(props){

	const fromNumberToString = (number) => {
		return `${number.toFixed(2)}€`
	}

    return(
        <View style={[props.style.row,{backgroundColor: "rgba(0,0,0,0.1)", width:"100%", padding: "2%"}]} key={props.key}>
            <Text>
                {props.item.name}
            </Text>
            <View>
                <Text>{fromNumberToString(props.item.price)}</Text>
                <Text>{props.item.time}</Text>
            </View>
        </View>
    );
};