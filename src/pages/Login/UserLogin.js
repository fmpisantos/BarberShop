import React from 'react';
import {View, Text, Button} from 'react-native';
import { Textfield } from "react-native-material-kit";
import { validatePhoneNumber } from "@utils/Regex";

export default function UserLogin(props) {
    return (
        <View style={[props.style.container, props.style.fix, props.style.fixItemsLeft]}>
            <Text>{props.lang.login.title}</Text>
                <Textfield
                    value={props.name}
                    onTextInput={(text)=>{
                        props.saveName(text);
                    }}
                    textContentType={"name"}
                    autoComplete={"name"}
                    blurOnSubmit={true}
                    textInputStyle={{color: "black"}}
                    placeholder={props.lang.login.name.over}
                    highlightColor={"gray"}
                    tint={"gray"}
                />
                <Textfield
                    highlightColor={props.validNumber ? "gray" : "red"}
                    tint={props.validNumber ? "gray" : "red"}
                    value={props.number}
                    onTextInput={(text)=>{
                        if(validatePhoneNumber(text))
                            props.saveNumber(text);
                    }}
                    textContentType={"telephoneNumber"}
                    textInputStyle={{color: "black"}}
                    autoComplete={"tel"}
                    blurOnSubmit={true}
                    placeholder={props.lang.login.phone.label}
                />
        </View>
    );
}
