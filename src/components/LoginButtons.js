import React from 'react';
import { View } from 'react-native';
import BigButton from "./BigButton";
import ButtonIcon from "./ButtonIcon";
import {FontAwesome} from "@expo/vector-icons";
import { appleAuth } from '@invertase/react-native-apple-authentication';
import {
    GoogleSignin
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();
export default function LoginButtons(props) {
    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            props.login({
                type: `google#${userInfo.user.id}`,
                name: userInfo.user.name,
                number: `${userInfo.user.email}`
            });
        } catch (error) {
        }
    }
    const appleSignIn = async () => {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        const userInfo = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
        
        if (userInfo === appleAuth.State.AUTHORIZED) {
            props.login({
                type:`apple#${userInfo.authorization.id_token}`,
                name: `${userInfo.fullName ? userInfo.fullName : `${userInfo.user.firstName} ${userInfo.user.lastName}`}`,
                number: `${userInfo.user.email}#${userInfo.authorization.id_token}`
            });
        }
    }
    return (
        <View style={{flex: 1}}>
            <BigButton
                color="#000000"
                onPress={() => {
                    const result = appleSignIn();
                }}
                text={props.lang.login.method.apple.title}
                textColor="#ffffff"
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<FontAwesome name="apple" style={props.style.padding10H}
                                                     size={24}
                                                     color={"white"}/>}
                                  {...props}
                                  active={true}/>}
                iconstyle={props.style.background1}
            />
            <View style={props.style.spacingHalf} />
            <BigButton
                color="#000000"
                onPress={() => {
                    const result = googleSignIn();
                }}
                text={props.lang.login.method.google.title}
                textColor="#ffffff"
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<FontAwesome name="google" style={props.style.padding10H}
                                                     size={24}
                                                     color={"white"}/>}
                                  {...props}
                                  active={true}/>}
                iconstyle={props.style.background1}
            />
            <View style={props.style.spacing} />
            <BigButton
                color="#000000"
                onPress={() => {
                    props.loginRegister();
                }}
                text={props.lang.login.method.number.title}
                textColor="#ffffff"
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<FontAwesome name="lock" style={props.style.padding10H}
                                                     size={24}
                                                     color={"white"}/>}
                                  {...props}
                                  active={true}/>}
                iconstyle={props.style.background1}
            />
        </View>
    );
}
