import React, {useState} from 'react';
import {View} from 'react-native';
import BigButton from '@components/BigButton';
import ButtonIcon from '@components/ButtonIcon';
import {FontAwesome, Fontisto} from '@expo/vector-icons';
import Moment from 'moment';
import AwesomeAlert from 'react-native-awesome-alerts';


export default function MainPageButtons(props) {
    const [alert, setAlert] = useState(false),
    [errorAlert,setErrorAlert] = useState({
        active: false,
        title: "",
        message: "",
        confirmText: "Close"
    });
    const reservar = () => {
        let duration = 0
        Moment().month()
        for (let i in props.control.servicosAtivos) {
            if (props.control.servicosAtivos[i]) {
                let date = Moment(`${props.control.dateSelected.year}-${props.control.dateSelected.month}-${props.control.dateSelected.day} ${props.control.dateSelected.hours}:${props.control.dateSelected.minutes}`)
                date = date.add(duration, 'm');
                let request = {
                    "serviceId": parseInt(i) + 1,
                    "shopId": 1,
                    "barberId": props.control.barber + 1,
                    "clientId": 1,
                    "dateTime": date
                }
                duration += props.servicos[i].duration;
                fetch(`${props.url}/history`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(request)
                })
                    .then(response => {
                        if (response.ok) {
                            setAlert(true)
                        } else
                            setErrorAlert({
                                active: true,
                                title: "Status",
                                message: response.status,
                                confirmText: "Close"
                            })
                    })
                    .catch(err => setErrorAlert({
                        active: true,
                        title: "Error",
                        message: err,
                        confirmText: "Close"
                    }))
            }
        }
    }

    const getServiceName = () => {
        let ret = "";
        for (let idx in props.control.servicosAtivos)
            if (props.control.servicosAtivos[idx])
                ret += `${props.servicos[idx].name} & `;
        return ret.length > 0 ? ret.substring(0, ret.length - 3) : undefined;
    }

    function addZeroes(num) {
        let before = `${num}`.replace(",", ".").split(".");
        let after = before[1] ?? "00";
        before = before[0];
        return `${props.lang.reservar} (${before}.${after.length !== 2 ? `${after}0` : after}€)`;
    }

    return (
        <>
            <BigButton
                color="#000000"
                textColor={props.control.value[1] ? "white" : "gray"}
                onPress={() => {
                    if (props.servicos.length === 0) props.loadServices()
                    if (props.control.value[1]) props.openModal(0)
                }}
                text={getServiceName() ?? props.lang.servico}
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<FontAwesome name="scissors" style={props.style.padding10H} size={24}
                                                     color={props.control.value[1] ? "white" : "gray"}/>}
                                  {...props}
                                  active={props.control.value[1]}/>}
                iconstyle={props.style.background1}
            />
            <View style={props.style.spacing}/>
            <BigButton
                color="#000000"
                textColor={props.control.value[2] ? "white" : "gray"}
                onPress={() => {
                    if (props.barbers.length === 0) props.loadBerbers()
                    if (props.control.value[2]) props.openModal(1)
                }}
                text={props.barbers[props.control.barber]?.name ?? props.lang.barbeiro}
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<Fontisto name="persons" style={props.style.padding10H} size={24}
                                                  color={props.control.value[2] ? "white" : "gray"}/>} {...props}
                                  active={props.control.value[2]}/>}
                iconstyle={props.style.background1}
            />
            <View style={props.style.spacing}/>
            <BigButton
                color="#000000"
                textColor={props.control.value[3] ? "white" : "gray"}
                onPress={() => {
                    if (props.control.value[3]) props.openModal(2)
                }}
                text={(props.control.dateSelected.hours.length > 0 && props.control.dateSelected.minutes.length > 0) ? `${props.control.dateSelected.day}/${props.control.dateSelected.month}/${props.control.dateSelected.year.substring(2, 5)} ${props.control.dateSelected.hours}:${props.control.dateSelected.minutes}` : props.lang.dataHora}
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<FontAwesome name="calendar-check-o" style={props.style.padding10H} size={24}
                                                     color={props.control.value[3] ? "white" : "gray"}/>} {...props}
                                  active={props.control.value[3]}/>}
                iconstyle={props.style.background1}
            />
            <View style={props.style.spacing}/>
            <BigButton
                color="#000000"
                textColor={props.control.value[4] ? "white" : "gray"}
                onPress={() => {
                    if (props.control.value[4])
                        reservar();
                }}
                text={addZeroes(props.control.total) ?? props.lang.reservar}
                {...props}
                icon={<ButtonIcon background={props.style.backgroundIcon}
                                  backgroundfaded={props.style.backgroundIconFaded}
                                  icon={<FontAwesome name="save" style={props.style.padding10H} size={24}
                                                     color={props.control.value[4] ? "white" : "gray"}/>} {...props}
                                  active={props.control.value[4]}/>}
                iconstyle={props.style.background1}
            />
            <AwesomeAlert
                show={alert}
                showProgress={false}
                title={props.lang.reservar}
                message={props.lang.reservado}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText={props.lang.dismiss}
                confirmButtonColor="#C48F41"
                onConfirmPressed={() => {
                    setAlert(false);
                    props.reset();
                }}
            />
            <AwesomeAlert
                show={errorAlert.active}
                showProgress={false}
                title={errorAlert.title}
                message={errorAlert.message}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText={errorAlert.confirmText}
                confirmButtonColor="#C48F41"
                onConfirmPressed={() => {
                    setErrorAlert({...errorAlert, active: false});
                }}
            />
        </>
    );
}
