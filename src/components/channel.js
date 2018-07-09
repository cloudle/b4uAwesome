import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import configs from '../const';

type Props = {
	item?: Object,
};

export default class Channel extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text style={styles.text}>{this.props.item.name}</Text>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		width: configs.avatarSize,
		height: configs.avatarSize,
		borderRadius: 4,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: '700'
	},
});
