import Moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';

export default function MyCalendar(props) {
	const [ day, setDay ] = useState(Moment().format('YYYY-MM-DD'));

	const loadDay = (day, reset = true) => {
		setDay(day.dateString);
		let date = Moment(day.dateString)
		if (reset) {
			props.resetHour();
			props.selectDate({
				dateString: date.format('YYYY-MM-DD'),
				hours: '',
				minutes: '',
				day: date.format('DD'),
				month: date.format('MM'),
				year: date.format('YYYY')
			});
		}
		fetch(`${props.url}/barbershop/${1}/barber/${props.control.barber + 1}?datetime=${day.dateString}`)
			.then((response) => response.json())
			.then((json) => {
				props.setTimesheet(json);
			});
	};

	useEffect(() => {
		let d =
			props.control.day && props.control.day !== ''
				? Moment(
						`${props.control.dateSelected.year}-${props.control.dateSelected.month}-${props.control
							.dateSelected.day}`,
						'YYYY-MM-DD'
					)
				: Moment()

		loadDay(
			{
				dateString: d.format('YYYY-MM-DD'),
				hours: '',
				minutes: '',
				day: d.format('DD'),
				month: d.format('MM'),
				year: d.format('YYYY')
			},
			props.control.dateSelected.day === '' || props.control.dateSelected.hour === ''
		);
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
