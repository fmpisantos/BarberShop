import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';

export default function BottomModal(props) {
	return (
		<Modal
            animationType="slide"
            transparent={true}
            visible={props.visible ?? false}
            onRequestClose={props.closeModal}
        >
            <TouchableOpacity activeOpacity={1} style={props.style.modalContainer} onPress={props.closeModal}>
                <TouchableOpacity activeOpacity={1} style={props.style.modalView} onPress={()=>{}}>
                    {props.children}
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
	);
}
