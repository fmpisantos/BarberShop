import Moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';

export default function MyCalendar(props) {
	const [ day, setDay ] = useState(Moment().format('YYYY-MM-DD'));

	const loadDay = (day) => {
		setDay(day.dateString);
        props.setTimesheet(props.schedules.days[day.dateString]?.[props.control.barber!==-1?props.control.barber : 0]?.length > 0?props.schedules.days[day.dateString][props.control.barber!==-1?props.control.barber : 0]: props.schedules.timeSheet);
	};

	useEffect(() => {
		loadDay({ day: {dateString:Moment().format('YYYY-MM-DD') }});
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
