import Moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';

export default function MyCalendar(props) {
	const [ day, setDay ] = useState(Moment().format('YYYY-MM-DD'));

	const loadDay = (day, reset = true) => {
		setDay(day.dateString);
		if(reset){
			props.resetHour();
			props.selectDate({
				"string": "",
				hours: "",
				minutes: "",
				day: day.day,
				month: day.month,
				year: day.year,
				duration: ""
			});
		}
        props.setTimesheet(props.schedules.days[day.dateString]?.[props.control.barber!==-1?props.control.barber : 0]?.length > 0?props.schedules.days[day.dateString][props.control.barber!==-1?props.control.barber : 0]: props.schedules.timeSheet);
	};

	useEffect(() => {
		let d = props.control.day!==""?Moment(`${props.control.dateSelected.year}-${props.control.dateSelected.month}-${props.control.dateSelected.day}`,'YYYY-MM-DD'):Moment()
		loadDay({
				dateString: d.format('YYYY-MM-DD'), 
				hours: "",
				minutes: "",
				day: d.day(),
				month: d.month(),
				year: d.year()
		},props.control.dateSelected.day==="" || props.control.dateSelected.hour==="");
	}, []);

	return (
		<Calendar
			markedDates={{
				[day]: { selected: true }
			}}
			onDayPress={loadDay}
			firstDay={1}
			enableSwipeMonths={true}
			theme={{
				calendarBackground: '#f8f5f0',
				todayTextColor: props.style.background1.backgroundColor,
				arrowColor: props.style.background1.backgroundColor,
				selectedDayBackgroundColor: '#000000',
				'stylesheet.calendar.header': {
					week: {
						marginTop: Platform.OS == 'ios' ? 6 : 2,
						flexDirection: 'row',
						justifyContent: 'space-between'
					}
				}
			}}
		/>
	);
}
