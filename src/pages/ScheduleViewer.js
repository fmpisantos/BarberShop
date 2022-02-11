import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from '@assets/Logo.png';
import BigButton from '@components/BigButton';
import ButtonIcon from '@components/ButtonIcon';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import Moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

export default function ScheduleViewer(props) {
	const items = {
		'2022-02-4': [],
		'2022-02-5': [],
		'2022-02-6': [],
		'2022-02-7': [],
		'2022-02-8': [],
		'2022-02-9': [],
		'2022-02-10': [],
		'2022-02-11': [
			{ key: '2022-02-11', name: 'Filipe', services: [ true, false ], start: '10:30', end: '11:00' }
		],
		'2022-02-12': [
			{ name: 'Bruno', services: [ true, true ], start: '09:30', end: '10:30' },
			{ name: 'João', services: [ false, true ], start: '10:30', end: '11:00' },
			{ name: 'Bruno', services: [ true, true ], start: '11:00', end: '12:00' },
			{ name: 'João', services: [ false, true ], start: '12:00', end: '12:30' },
			{ name: 'Bruno', services: [ true, true ], start: '14:30', end: '15:30' },
			{ name: 'João', services: [ false, true ], start: '15:30', end: '16:00' }
		],
		'2022-02-13': [],
		'2022-02-14': [],
		'2022-02-15': [],
		'2022-02-16': [],
		'2022-02-17': [],
		'2022-02-18': []
	};

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
		displayedItems = { day: day, array: items[day.dateString] || [] };
	};

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
				<View style={[ props.style.center, { paddingTop: '5%', paddingHorizontal: '5%' } ]}>
					<Text>{displayedItems.day.day}</Text>
					<Text>{props.lang.mes[displayedItems.day.month]}</Text>
				</View>
				<ScrollView style={{ marginRight: '5%' }}>
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

	var today = Moment().format('YYYY-MM-DD');
	return (
		<Agenda
			items={items}
			onDayPress={(day) => {
				changeDay(day);
			}}
			selected={today}
			renderItem={renderItem}
			renderEmptyDate={renderEmptyDate()}
			rowHasChanged={rowHasChanged}
			//onDayChange={(day)=>{updateItems(day)}}
			renderKnob={() => {
				return (
					<View style={{ height: 14, padding: 4 }}>
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
			// rowHasChanged={(r1, r2) => {
			// 	return r1.text !== r2.text;
			// }}
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
			// Agenda container style
			style={{}}
		/>
	);
}
