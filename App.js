import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AsyncStorage, LogBox, StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

// Langs
const lang = require('@langs/ptpt.json');

// Styles
import styles from '@styles/style';

//Pages
import Home from '@pages/Home/Home';
import ScheduleViewer from '@pages/Schedule/ScheduleViewer';

// Components

// Store
import {Provider} from 'react-redux';
import store from '@store/store';
import {useSelector, useDispatch} from 'react-redux';
import {
    replace,
    removeService,
    addService,
    openModal,
    closeModal,
    state,
    selectBarber,
    selectDate,
    resetDate,
    reset
} from '@store/create/state';
import {
    setUser,
    clearUser,
    state as loginState
}from '@store/firebase/firebase';
import {validatePhoneNumber} from "./src/utils/Regex";

const App = (props) => {
    const navigationRef = useNavigationContainerRef();

    const [servicos, setServicos] = useState([]);
    const [barbers, setBarbers] = useState([]);

    // const url = 'https://notalkfood.herokuapp.com';
    const localhost = 'localhost'//'192.168.1.29'
    const url = `http:${localhost}:8080`;

    const loadBarbers = () => {
        try {
            fetch(`${url}/barbershop/1/barbers`)
                .then((response) => response.json())
                .then((json) => {
                    const barber = json.sort((a, b) => a.id > b.id);
                    setBarbers(barber);
                })
                .catch((err) => {
                    alert(err);
                });
        } catch {
        }

    }

    const loadServices = () => {
        try {
            fetch(`${url}/barbershop/1/services`)
                .then((response) => response.json())
                .then((json) => {
                    setServicos(json);
                })
                .catch((err) => {
                    alert(err);
                });
        } catch {
        }
    }

    const loadUser = async () => {
        const id = await AsyncStorage.getItem("id");
        const name = await AsyncStorage.getItem("name");
        const number = await AsyncStorage.getItem("number");
        if(id && id>0 && name && name.length > 0 && number && number.length > 0) {
            _saveUserInfo("id", id);
            _saveUserInfo("name", name);
            _saveUserInfo("number", number);
            _saveUserInfo("logged", true);
        }else{
            AsyncStorage.clear();
            _clearUser();
        }

    }

    useEffect(() => {
        loadServices();
        loadBarbers();
        loadUser();
    }, []);

    const control = useSelector(state);
    const loginControl = useSelector(loginState);

    const dispatch = useDispatch();

    const _replace = (state) => {
        dispatch(replace(state));
    };

    const _closeModal = () => dispatch(closeModal());

    const _openModal = (id) => {
        dispatch(openModal(id));
    };

    const _addService = (id) => {
        dispatch(addService(id));
    };

    const _removeService = (id) => {
        dispatch(removeService(id));
    };

    const _selectBarber = (id) => {
        dispatch(selectBarber(id));
    };

    const _selectDate = (date) => {
        dispatch(selectDate(date));
    };

    const _resetDate = () => {
        dispatch(resetDate());
    };
    const _reset = () => {
        dispatch(reset());
    };
    const _saveUserInfo = (field, val) => {
        dispatch(setUser( {
            field: field,
            val: val
        }));
    }
    const _clearUser = () => {
        dispatch(clearUser());
    }

    LogBox.ignoreAllLogs(true)

    const fromNumberToString = (number) => {
        return `${number.toFixed(2)}€`;
    };

    return (
        <NavigationContainer ref={navigationRef} headerMode={null}>
            <StatusBar backgroundColor={styles.background1.backgroundColor}/>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {display: 'none'}
                }}
                initialRouteName="Home"
            >
            <Stack.Screen name="Home">
                    {(props) => (
                        <Home
                            {...props}
                            url={url}
                            loadBarbers={loadBarbers}
                            loadServices={loadServices}
                            servicos={servicos}
                            barbers={barbers}
                            lang={lang}
                            control={control}
                            replace={_replace}
                            style={styles}
                            closeModal={_closeModal}
                            openModal={_openModal}
                            addService={_addService}
                            removeService={_removeService}
                            fromNumberToString={fromNumberToString}
                            selectBarber={_selectBarber}
                            selectDate={_selectDate}
                            resetDate={_resetDate}
                            reset={_reset}
                            saveNumber={(number)=>{_saveUserInfo("number",number)}}
                            saveName={(name)=>{_saveUserInfo("name",name)}}
                            checkNumber={(number)=>{let valid =validatePhoneNumber(number); _saveUserInfo("validNumber", valid); return valid;}}
                            setUserId={(id)=>{_saveUserInfo("id", id)}}
                            name={loginControl.name}
                            number={loginControl.number}
                            loginState={loginControl}
                            validNumber={loginControl.validNumber}
                            clearUser={_clearUser}
                            login={()=>{_saveUserInfo("logged",true)}}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="ScheduleViewer">
                    {(props) => (
                        <ScheduleViewer {...props} url={url} lang={lang} style={styles} servicos={servicos} id={loginControl.id}/>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default function AppWrapper() {
    LogBox.ignoreAllLogs(true);
    return (
        <Provider store={store} style={styles.fix}>
            <App />
        </Provider>
    );
}
