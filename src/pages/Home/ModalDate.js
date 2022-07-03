import React, {useState} from 'react';
import BottomModal from '@components/BottomModal';
import Calendar from '@components/Calendar';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Button from '@components/Button';

export default function ModalDate(props) {
    const [timesheet, setTimesheet] = useState([]);
    const [selectedHour, setSelectedHour] = useState(-1);
    return (
        <BottomModal {...props} visible={props.control.modal == 2}>
            <Calendar
                {...props}
                setTimesheet={setTimesheet}
                resetHour={() => {
                    setSelectedHour(-1);
                }}
            />
            <ScrollView scrollEnabled horizontal style={{paddingVertical: '2%'}}>
                {timesheet.map((item, key) => {
                    if (!item.reserved)
                        return (
                            <View key={key} style={{padding: 10}}>
                                <TouchableOpacity
                                    style={[
                                        selectedHour === key ||
                                        `${props.control.hours}:${props.control.minutes}` === item.string
                                            ? props.style.dateselected
                                            : props.style.dateselect
                                    ]}
                                    onPress={() => {
                                        setSelectedHour(key);
                                        props.selectDate({
                                            ...props.control.dateSelected,
                                            hours: item.string.split(':')[0],
                                            minutes: item.string.split(':')[1]
                                        });
                                    }}
                                >
                                    <Text
                                        style={[
                                            props.style.center,
                                            selectedHour === key ||
                                            `${props.control.hours}:${props.control.minutes}` === item.string
                                                ? props.style.textSelected
                                                : props.style.textUnSelected
                                        ]}
                                    >
                                        {item.string}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        );
                })}
                {timesheet.length === 0 && (
                    <View style={[props.style.row]}>
                        <Text style={{textAlign: "center"}}>{props.lang.noSchedule}</Text>
                    </View>
                )}
            </ScrollView>
            <View style={{width: '100%', paddingVertical: '2%'}}>
                <Button
                    style={{borderRadius: 10}}
                    color={props.style.background1.backgroundColor}
                    textColor={'white'}
                    onPress={() => {
                        props.closeModal();
                    }}
                    {...props}
                    component={
                        <View style={[props.style.row]}>
                            <View style={{paddingHorizontal: '10%'}}>
                                <Text>{props.lang.confirmar}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        </BottomModal>
    );
}
