import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function BarberIcon(props) {
    return (
        <TouchableOpacity onPress={() => props.selectBarber(props.index)} style={[{
            padding: "5%",
            minWidth: "33%"
        }, props.control.barber === props.index ? {
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: "#fff",
            borderBottomColor: props.style.background1.backgroundColor
        } : {}]}>
            <View style={props.style.center}>
                <Image style={props.style.barberImage} source={require("@assets/Logo.png")}/>
                <Text style={{textAlign: 'center'}}>{props.barbers[props.index].name}</Text>
            </View>
        </TouchableOpacity>
    );
};