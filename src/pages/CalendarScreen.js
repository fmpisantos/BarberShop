import React, { useState, useEffect } from "react";
import { View, Text,  TouchableOpacity, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import moment from "moment";
const ServicesCalendarScreen = (props) => {

    const [events, setEvents] = useState(null);

    const [date, setDate] = useState(moment().format("MMMM YYYY"));

    const [dateToRefresh, setDateToRefresh] = useState(moment().format("YYYY-MM-DD"));

    const items = {
		'2022-02-7': [],
		'2022-02-8': [],
		'2022-02-9': [],
		'2022-02-10': [],
		'2022-02-11': [ { name: "Filipe", services: [true,false], start: "10:30", end: "11:00" } ],
		'2022-02-12': [ { name: "Bruno", services: [true,true], start: "09:30", end: "10:30" },  { name: "João", services: [false,true], start: "10:30", end: "11:00" },{ name: "Bruno", services: [true,true], start: "11:00", end: "12:00" },  { name: "João", services: [false,true], start: "12:00", end: "12:30" },{ name: "Bruno", services: [true,true], start: "14:30", end: "15:30" },  { name: "João", services: [false,true], start: "15:30", end: "16:00" }],
		'2022-02-13': [],
		'2022-02-14': [],
		'2022-02-15': [],
		'2022-02-16': [],
		'2022-02-17': [],
		'2022-02-18': []
	};

    return (
        <Agenda
                    // the list of items that have to be displayed in agenda. If you want to render item as empty date
                    // the value of date key kas to be an empty array []. If there exists no value for date key it is
                    // considered that the date in question is not yet loaded
                    items={items}
                    renderItem={(item, firstItemInDay) => this.renderItem(item, firstItemInDay)}
                    renderDay={(day, item) =>this.renderItemDay(day, item)}
                    renderEmptyDate={() =>this.renderEmptyDate()}
                    rowHasChanged={(r1, r2) =>this.rowHasChanged(r1,r2)}
                    onDayPress={this.onDaySelected.bind(this)}
                    minDate={this.props.minDate? this.props.minDate : Moment(today).format('YYYY-MM-DD')}
                    maxDate ={this.props.maxDate? this.props.maxDate : Moment(today).format('YYYY-MM-DD')}
                    renderKnob={() => {return (<View style={{height:14, padding:4}}><View style={{height:'100%', width:40, backgroundColor:'#DCDCDC', borderRadius:4,
                        borderWidth: 1,
                        borderColor: '#DCDCDC'}} /></View>);}}
                    markedDates={this.props.markedDates}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#f8f5f0',
                        selectedDayBackgroundColor: '#E0D2BC',
                        selectedDayTextColor: '#000000',
                        todayTextColor: '#000000',
                        textDisabledColor: '#888888',
                        dayTextColor: '#000000',
                        agendaKnobColor: '#DCDCDC',
                        dotColor: COLORS.GREEN,
                        selectedDotColor: COLORS.PRIMARY,
                        'stylesheet.calendar.header': { week: { marginTop: Platform.OS=='ios'?6:2, flexDirection: 'row', justifyContent: 'space-between' } }

                    }}

                />

    );
}

export default ServicesCalendarScreen;