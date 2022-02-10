import React from 'react';
import { Text, View } from 'react-native';
import {
	ColoredRaisedButton,
  } from 'react-native-material-kit';

export default function BigButton(props){
    return(
        <ColoredRaisedButton onTouch={()=>{props.onPress()}} style={[props.style.bigButton, {backgroundColor : props.color ?? "white"}]}>
                <View style={[props.style.row, props.style.fixLeft, props.style.center]}>
                    {props.icon}
                    <Text style={[props.style.bigButtonText,{color: props.textColor},props.style.padding10H]}>{props.text}</Text>
                </View>
        </ColoredRaisedButton>
    );
};