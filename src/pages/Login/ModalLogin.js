import React, {useEffect, useState} from 'react';
import { Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Textfield } from "react-native-material-kit";
import LoginButtons from "../../components/LoginButtons";
import BottomModal from "../../components/BottomModal";

export default function ModalLogin(props) {
    const [user, setUser] = useState({
        name: props.name,
        phone: props.phone
    });
    useEffect(()=>{
        props.clearUser();
    },[])
    const loginRegister = () =>{
        props.checkNumber();
        if (props.checkNumber(user.number)) {
            props.saveName(user.name);
            props.saveNumber(user.number);
            props.login();
            props.closeModal();
        }
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
                            <LoginButtons {...props} loginRegister={loginRegister}/>
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
