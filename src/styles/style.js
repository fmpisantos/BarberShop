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
	bigLogoStreach:{
		width: '70%',
		height: '35%',
		resizeMode: 'stretch'
	},
	bigButton: {
		width: "80%",
		height: "7%"
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
		alignSelf: 'flex-end'
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
	}
});

export default styles;
