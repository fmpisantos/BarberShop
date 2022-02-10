import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import Logo from '@assets/Logo.png';
import BigButton from '@components/BigButton';
import ButtonIcon from '@components/ButtonIcon';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import Moment from 'moment';

export default function ScheduleViewer(props) {
    const active = [true, false, false, false]

    const loadItems = (day) => {
        const items = this.state.items || {};
    
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
    
            if (!items[strTime]) {
              items[strTime] = [];
              
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                  day: strTime
                });
              }
            }
          }
          
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          this.setState({
            items: newItems
          });
        }, 1000);
      }

    const renderItem = (reservation,isFirst) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? 'black' : '#43515c';
    
        return (
          <TouchableOpacity
            style={[{height: reservation.height}]}
                onPress={() => alert(reservation.name)}
            >
                <Text style={{fontSize, color}}>{reservation.name}</Text>
          </TouchableOpacity>
        );
    }

    const renderEmptyDate = () => {
        return (
          <View >
            <Text>This is empty date!</Text>
          </View>
        );
      }
    
    const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
      }
    
    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }

    var today = Moment().format('YYYY-MM-DD')
    return (
        <Agenda
        // the list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key kas to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        selected={today}

        items={{
            '2022-02-10': [{name: 'item 1 - any js object'}],
            '2022-02-11': [{name: 'item 2 - any js object', height: 80}],
            '2022-02-12': [],
            '2022-02-13': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
          }}

        renderItem={(item, firstItemInDay) => renderItem(item, firstItemInDay)}
        //renderDay={(day, item) =>renderItemDay(day, item)}
        renderEmptyDate={() =>renderEmptyDate()}
        rowHasChanged={(r1, r2) =>rowHasChanged(r1,r2)}
        onDayPress={(r)=>{alert("hello");console.log(r)}}
        onDayChange={day => {
            console.log('day changed');
          }}
        minDate={props.minDate? props.minDate : Moment().format('YYYY-MM-DD')}
        maxDate ={props.maxDate? props.maxDate : Moment().format('YYYY-MM-DD')}
        renderKnob={() => {return (<View style={{height:14, padding:4}}><View style={{height:'100%', width:40, backgroundColor:'#DCDCDC', borderRadius:4,
            borderWidth: 1,
            borderColor: '#DCDCDC'}} /></View>);}}
        markedDates={[]}
        theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#f8f5f0',
            selectedDayBackgroundColor: '#E0D2BC',
            selectedDayTextColor: '#000000',
            todayTextColor: '#000000',
            textDisabledColor: '#888888',
            dayTextColor: '#000000',
            agendaKnobColor: '#DCDCDC',
            dotColor: 'black',
            selectedDotColor: 'white',
            'stylesheet.calendar.header': { week: { marginTop: Platform.OS=='ios'?6:2, flexDirection: 'row', justifyContent: 'space-between' } }

        }}

    />
    );
}
