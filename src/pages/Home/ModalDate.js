import React from 'react';
import BottomModal from "@components/BottomModal";
import Calendar from '@components/Calendar';

export default function ModalDate(props) {
	return (
		<BottomModal {...props} visible={props.control.modal == 2}>
			<Calendar {...props}/>
		</BottomModal>
	);
}
