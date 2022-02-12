import Moment from 'moment';
import React, {useState} from 'react';
import { Calendar } from 'react-native-calendars';

export default function MyCalendar(props) {
    const[day, setDay] = useState(Moment().format('YYYY-MM-DD'))
    const loadDay = (day) =>{
        setDay(day.dateString)
    }
	return (
		<Calendar
            markedDates={{
                [day]: { selected: true },
            }}
            onDayPress={loadDay}
            firstDay={1}
            enableSwipeMonths={true}
            theme={{
				calendarBackground: '#f8f5f0',
                todayTextColor: props.style.background1.backgroundColor,
                arrowColor: props.style.background1.backgroundColor,
                selectedDayBackgroundColor: "#000000",
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