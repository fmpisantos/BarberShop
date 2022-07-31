import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox, StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

// Langs
const lang = require('@langs/ptpt.json');

// Styles
import styles from '@styles/style';

//Pages
import Home from '@pages/Home/Home';
import About from '@pages/About';
import ScheduleViewer from '@pages/ScheduleViewer';

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

const App = () => {
    const navigationRef = useNavigationContainerRef();

    const [servicos, setServicos] = useState([]);
    const [barbers, setBarbers] = useState([]);

    // const url = 'https://notalkfood.herokuapp.com';
    const localhost = 'localhost'//'192.168.1.29' // 'localhost'
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

    useEffect(() => {
        loadServices();
        loadBarbers();
    }, []);

    const control = useSelector(state);

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

    console.disableYellowBox = true;
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
                            // schedules={schedules}
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
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="About">
                    {(props) => (
                        <About
                            {...props}
                            url={url}
                            lang={lang}
                            counter={counter}
                            increment={_increment}
                            incrementByAmount={_incrementByAmount}
                            style={styles}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="ScheduleViewer">
                    {(props) => (
                        <ScheduleViewer {...props} url={url} lang={lang} style={styles} servicos={servicos}/>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default function AppWrapper() {
    return (
        <Provider store={store} style={styles.fix}>
            <App/>
        </Provider>
    );
}
