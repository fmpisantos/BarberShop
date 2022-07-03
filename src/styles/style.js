import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	background1:{
		backgroundColor: '#C48F41',
	},
	backgroundIconFaded: {
		backgroundColor: "rgba(196,143,65,0.3)"
	},
	backgroundIcon: {
		backgroundColor: "rgba(196,143,65,0.7)"
	},
	dateselect: {
		backgroundColor: '#f8f5f0',
		borderRadius: 10,
		color: "#000000",
		padding: 5,

	},
	dateselected: {
		backgroundColor: '#000000',
		borderRadius: 10,
		color: "#fff",
		padding: 5,
	},
	textUnSelected: {
		color: "#000000"
	},
	textSelected: {
		color: "#fff"
	},
	container: {
		flex: 1,
		backgroundColor: '#C48F41',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	agendaContainer:{
		// height: 100,
		width: '100%',
		backgroundColor: "#fff",
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginTop: "5%",
		padding: "5%"
	},
	barberImage: {
		width: 50,
		height: 50
	},
	modalContainer:{
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.1)',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	modalView:{
		backgroundColor: "white",
		width: "93%",
		borderRadius: 10,
		position: "absolute",
		bottom: "2%",
		padding: "5%",
		alignItems: 'center',
	},
	bigLogoStreach:{
		width: '70%',
		height: '35%',
		resizeMode: 'stretch'
	},
	bigButton: {
		width: "80%",
		height: "7%",
		borderRadius: 10,
	},
	button: {
		height: 50
	},
	bigButtonText:{
		color: "#fff",
		fontSize: 16
	},
	row: {
		flexDirection: "row"
	},
	padding10: {
		padding: 10
	},
	padding10H: {
		paddingHorizontal: 10
	},
	margin10H: {
		marginHorizontal: 10
	},
	margin10R: {
		marginRight: 10
	},
	fixLeft: {
		alignSelf: 'flex-start',
	},
	fixRight: {
		// alignSelf: 'flex-end',
		alignItems: 'flex-end'
	},
	title:{
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center"
	},
	title2:{
		fontSize: 12,
		fontWeight: "normal",
		textAlign: "center"
	},
	colorWhite: {
		color: "#fff"
	},
	spacing: {
		paddingVertical: "2.5%"
	},
	spacingHalf:{
		paddingVertical: "1.25%"
	},
	center:{
		justifyContent: 'center',
       	alignItems: 'center'
	},
	centerVerticaly:{
		alignItems: 'center',
	},
	fixTop: {
		justifyContent: 'flex-start'
	},
	centerAlignTextVerticaly: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default styles;
