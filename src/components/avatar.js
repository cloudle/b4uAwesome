import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
	person?: {
		avatar?: String,
		age: Number | String
	}
};

export default class extends Component {
	props: Props;

	render() {
		return <View style={style.container}>
			<Text>Hs</Text>
		</View>;
	}
}

const style = StyleSheet.create({
	container: {
		width: 50, height: 50,
		backgroundColor: '#ffffff',
	},
});
