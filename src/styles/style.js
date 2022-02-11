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
	modalContainer:{
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.1)',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	modalView:{
		backgroundColor: "white",
		width: "98%",
		position: "absolute",
		bottom: "1%",
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
		height: "7%"
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
		alignSelf: 'flex-end',
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
		justifyContent: 'center', //Centered horizontally
       	alignItems: 'center', //Centered vertically
	},
	centerVerticaly:{
		alignItems: 'center', //Centered vertically
	}
});

export default styles;
