import React from 'react';
import {
	ColoredRaisedButton,
  } from 'react-native-material-kit';

export default function Button(props){
    return(
        <ColoredRaisedButton onTouch={()=>{props.onPress()}} style={[props.style.button, {backgroundColor : props.color ?? "white"}]}>
                {props.component}
        </ColoredRaisedButton>
    );
};