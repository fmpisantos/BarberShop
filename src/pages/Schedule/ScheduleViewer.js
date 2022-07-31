import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {getTimeFromMoment} from "@utils/date";

export default function ScheduleViewer(props) {
    const [items, setItems] = useState({})

    var displayedItems = {
        day: {
            year: Moment().year(),
            month: Moment().month(),
            day: Moment().day(),
            timestamp: Moment().milliseconds(),
            dateString: Moment().format('YYYY-MM-DD')
        },
        array: []
    };

    const changeDay = (day) => {
        displayedItems = {day: day, array: items[day.dateString] || []};
        requestSchedule(day);
    };

    useEffect(() => {
        requestSchedule({dateString: Moment().format('YYYY-MM-DD')});
    }, [])


    const renderItem = (reservation, isFirst) => {
        return (
            <View style={props.style.agendaContainer}>
                <Text>
                    {reservation.start} - {reservation.end}
                </Text>
                <Text>{reservation.name}</Text>
                {props.servicos.map((i, k) => {
                    if (reservation.services[k]) return <Text key={k}>{i.name}</Text>;
                })}
            </View>
        );
    };

    const renderEmptyDate = () => {
        return (
            <View style={props.style.row}>
                <View style={[props.style.center, {paddingTop: '5%', paddingHorizontal: '5%'}]}>
                    <Text>{displayedItems.day.day}</Text>
                    <Text>{props.lang.mes[displayedItems.day.month]}</Text>
                </View>
                <ScrollView style={{marginRight: '5%'}}>
                    {displayedItems.array.map((item, key) => {
                        return (
                            <View style={props.style.agendaContainer} key={key}>
                                <Text>
                                    {item.start} - {item.end}
                                </Text>
                                <Text>{item.name}</Text>
                                {props.servicos.map((i, k) => {
                                    if (item.services[k]) return <Text key={k}>{i.name}</Text>;
                                })}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    };

    const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
    };

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const requestSchedule = (day) => {
        const request = {
            method: 'POST',
            body: day.dateString
        }
        fetch(`${props.url}/barbers/1/history`, request)
            .then(response => {
                return response.status === 200 ? response.json() : null
            })
            .then((json) => {
                if (json !== null) {
                    let temp = items;
                    let arrCont = [];
                    for (let i in json) {
                        const next = json[i];
                        const start = Moment(next.date_time);
                        const end = Moment(next.date_time).add(next.duration, 'minutes');
                        let arr = Array(props.servicos.length - 1).fill(false);
                        arr[next.service_id - 1] = true;
                        let content = {
                            name: next.clientname,
                            services: arr,
                            start: getTimeFromMoment(start),
                            end: getTimeFromMoment(end)
                        }
                        arrCont.push(content);
                    }
                    temp[day.dateString] = arrCont;
                    setItems(temp);
                }
            })
    }

    var today = Moment().format('YYYY-MM-DD');
    return (
        <>
            <Agenda
                items={items}
                onDayPress={(day) => {
                    changeDay(day);
                }}
                selected={today}
                renderItem={renderItem}
                renderEmptyDate={renderEmptyDate()}
                rowHasChanged={rowHasChanged}
                renderKnob={() => {
                    return (
                        <View style={{height: 14, padding: 4}}>
                            <View
                                style={{
                                    height: '100%',
                                    width: 40,
                                    backgroundColor: '#DCDCDC',
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: '#DCDCDC'
                                }}
                            />
                        </View>
                    );
                }}
                theme={{
                    backgroundColor: '#f8f5f0',
                    calendarBackground: '#f8f5f0',
                    selectedDayBackgroundColor: '#E0D2BC',
                    selectedDayTextColor: '#000000',
                    todayTextColor: '#000000',
                    textDisabledColor: '#888888',
                    dayTextColor: '#000000',
                    agendaKnobColor: '#DCDCDC',
                    dotColor: 'black',
                    selectedDotColor: 'white',
                    'stylesheet.calendar.header': {
                        week: {
                            marginTop: Platform.OS == 'ios' ? 6 : 2,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }
                }}
            />
        </>
    );
}
