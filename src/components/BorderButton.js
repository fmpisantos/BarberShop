import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

export default function BorderButton(props){
    return (
        <TouchableOpacity style={[props.style.borderButton, {borderColor: props.borderColor}]} onPress={() => {
            props.function();
        }}>
            <View style={props.style.center}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};