import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, Keyboard, View, AsyncStorage} from 'react-native';
import { Textfield } from "react-native-material-kit";
import LoginButtons from "@components/LoginButtons";
import BottomModal from "@components/BottomModal";

export default function ModalLogin(props) {
    const [user, setUser] = useState({
        type: "normal",
        name: props.name,
        phone: props.phone
    });
    const login = (signin = user) => {
        props.saveName(signin.name);
        props.saveNumber(signin.number);
        try {
            fetch(`${props.url}/client?type=${signin.type.split("#")[0]}`,{
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                    body: JSON.stringify({
                        "nif": 0,
                        "name": signin.name,
                        "email": "",
                        "phone": signin.number,
                        "active": true
                    })
            })
                .then((response) => response.json())
                .then((json) => {
                    props.setUserId(json.id);
                    props.login();
                    AsyncStorage.setItem("id", json.id);
                    AsyncStorage.setItem("name", signin.name);
                    AsyncStorage.setItem("number", signin.number);
                    props.closeModal();
                })
                .catch((err) => {
                    alert(err);
                });
        }catch{}
    }
    const loginRegister = () =>{
        props.checkNumber();
            login();
    }
    return (
        <BottomModal {...props} visible={props.control.modal === -2}>
            <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
                <View style={[props.style.container, props.style.fix, props.style.fixItemsLeft]}>
                    <View style={props.style.row}>
                        <View style={props.style.col1}/>
                        <View style={[props.style.col8]}>
                            <View style={props.style.spacingx2}/>
                            <Text style={[props.style.title, props.style.colorWhite]}>{props.lang.login.title}</Text>
                            <View style={props.style.spacingx2}/>
                            <Textfield
                                value={user.name}
                                textContentType={"name"}
                                autoComplete={"name"}
                                blurOnSubmit={true}
                                textInputStyle={{color: "black"}}
                                placeholder={props.lang.login.name.over}
                                highlightColor={"gray"}
                                tint={"gray"}
                                onChangeText={(val) => {
                                    setUser({...user, name: val})
                                }}
                            />
                            <Textfield
                                highlightColor={props.validNumber ? "gray" : "red"}
                                tint={props.validNumber ? "gray" : "red"}
                                value={user.number}
                                onChangeText={(val) => {
                                    setUser({...user, number: val})
                                }}
                                textContentType={"telephoneNumber"}
                                textInputStyle={{color: "black"}}
                                autoComplete={"tel"}
                                blurOnSubmit={true}
                                placeholder={props.lang.login.phone.label}
                            />
                            <View style={props.style.spacingx2}/>
                            <View style={props.style.spacingx2}/>
                            <View style={props.style.spacingx2}/>
                            <LoginButtons {...props} loginRegister={loginRegister} login={login} />
                            <View style={props.style.spacingx2}/>
                            <View style={props.style.spacingx2}/>
                        </View>
                        <View style={props.style.col1}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </BottomModal>
    );
}
