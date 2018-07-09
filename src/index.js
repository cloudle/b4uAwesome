import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { utils, RuuiProvider, Button, Input, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';

import Avatar from './components/avatar';
import Channel from './components/channel';
import { store } from './store';
import configs, { pi, name } from './const';
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
			messages: [],
			currentMessage: '',
			channels: [{ name: 'AI' }, { name: 'AB' }]
		};
	}

	render() {
		const { leftPaneWidth, themeColor, darken, lighten } = configs,
			darkerBackground = darken(themeColor, 10);

		return <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red', }}>
			<View
				style={{
					width: 60,
					paddingTop: 5,
					backgroundColor: darkerBackground,
					alignItems: 'center',
				}}>
				<View style={{ flex: 1 }}>
					{this.state.channels.map((item, i) => {
						return <Channel key={i} item={item}/>
					})}
				</View>
				<Avatar/>
			</View>
			<View style={{ width: leftPaneWidth, backgroundColor: themeColor, }}>
				{/*<Button*/}
					{/*title="Hey" tooltip="asdadsadasd" tooltipDirection="bottom"*/}
					{/*/>*/}
				{/*<Input floatingLabel="asdasdsad"/>*/}
				{/*<Input/>*/}
				{/*<Input/>*/}
			</View>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white'
				}}>
				<View style={{ flex: 1, padding: 18, }}>
					{this.state.messages.map((item, i) => {
						return <Text key={i}>{item.content}</Text>
					})}
				</View>
				<View style={{ padding: 8, borderTopWidth: 1, borderColor: '#dedede', }}>
					<View
						style={{
							flexDirection: 'row',
							borderRadius: 5,
							borderColor: '#dedede',
							borderWidth: 1,
						}}>
						<View style={{ width: 30, borderColor: '#dedede', borderRightWidth: 1, }}>
						</View>
						<View style={{ flex: 1, }}>
							<TextInput
								style={{ padding: 8, }}
								ref={instance => this.input = instance}
								value={this.state.currentMessage}
								onChangeText={(value) => { this.setState({ currentMessage: value }) }}
								onKeyPress={({ nativeEvent }) => {
									if (nativeEvent.key === 'Enter') {
										const nextMessages = [...this.state.messages,
											{ content: this.state.currentMessage }];

										this.setState({ messages: nextMessages, currentMessage: '' });
										setTimeout(() => { this.input.focus(); });
									}
								}}/>
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
