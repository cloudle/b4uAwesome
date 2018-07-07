import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';

import { store } from './store';
import * as appActions from './store/action/app';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
	web: 'Command/Control+R to reload your browser :p\n' +
	'\nAnd in Browser, we have great advantage\nwhen using Chrome Developer Tool\ncompare to the poor native-dev-menu!',
});

type Props = {
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

class App extends Component {
	props: Props;

	constructor(props) {
		super(props);
		this.state = {
			sidebarEnabled: false,
		};
	}

	render() {
		const textStyle = {
			fontSize: 40, color: '#ffffff',
		};

		return <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red', }}>
			<View style={{ width: 60, backgroundColor: '#261c25',}}></View>
			<View style={{ width: 180, backgroundColor: '#4d384b' }}></View>
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={{ flex: 1, }}></View>
				<View style={{ padding: 8, borderTopWidth: 1, borderColor: '#dedede', }}>
					<View
						style={{
							flexDirection: 'row',
							borderRadius: 5,
							borderColor: '#dedede',
							borderWidth: 1,
						}}>
						<View style={{ width: 30, borderColor: '#dedede', borderRightWidth: 1, }}></View>
						<View style={{ flex: 1, }}>
							<TextInput style={{ padding: 8, }}/>
						</View>
						<View style={{ width: 50, borderColor: '#dedede', borderLeftWidth: 1, }}></View>
					</View>
				</View>
			</View>
			{this.state.sidebarEnabled && <View
				style={{ width: 180, backgroundColor: 'gray' }}>

			</View>}
		</View>;
	}

	increaseCounter = () => {
		this.props.dispatch(appActions.increaseCounter());
	};
}

export default function AppContainer(props) {
	return <RuuiProvider>
		<Provider store={store}>
			<App/>
		</Provider>

		<Tooltip/>
	</RuuiProvider>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1, backgroundColor: 'red',
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	buttonWrapper: {
		backgroundColor: '#00bcd4',
		marginTop: 20,
	},
	buttonIcon: {
		fontSize: 28,
		color: '#ffffff',
	},
});
