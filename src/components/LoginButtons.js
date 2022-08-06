import React from 'react';
import { View } from 'react-native';
import BigButton from "./BigButton";
import ButtonIcon from "./ButtonIcon";
import {FontAwesome} from "@expo/vector-icons";
import { appleAuth } from '@invertase/react-native-apple-authentication';


export default function LoginButtons(props) {
    const googleSignIn = async () => {
        // performs login request
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        // get current authentication state for user
        // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
        console.log(credentialState);
        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
        }
    }
    return (
        <View style={{flex: 1}}>
            <BigButton
                color="#000000"
                onPress={() => {
                    const result = googleSignIn();
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
                onPress={() => {}}
                text={props.lang.login.method.google.title}
                textColor="#ffffff"
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<FontAwesome name="google" style={props.style.padding10H}
                                                     size={24}
                                                     color={"white"}/>}
                                  {...props}
                                  active={false}/>}
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
