import React from 'react';
import { View } from 'react-native';

export default function ButtonIcon(props){
    return(
        <View style={[props.style.center, props.active ? {backgroundColor: "rgba(206,38,28,0.7)",minHeight: "100%"}:{backgroundColor: "rgba(206,38,28,0.1)",minHeight: "100%"},props.style.margin10R]} >
            {props.icon}
        </View>
    );
};