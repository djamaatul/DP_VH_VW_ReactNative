import { View, Text, PixelRatio } from 'react-native';
import React from 'react';
import { dp } from './dp';
import { vh, vw } from './vw-vh';
const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
			<View
				style={{
					width: PixelRatio.getPixelSizeForLayoutSize(50),
					height: PixelRatio.getPixelSizeForLayoutSize(50),
					backgroundColor: 'red',
				}}
			></View>
			<View
				style={{
					width: dp(50),
					height: dp(50),
					backgroundColor: 'blue',
				}}
			></View>
			<View
				style={{
					width: '50%',
					height: vh(50),
					backgroundColor: 'blue',
				}}
			>
				<View
					style={{
						width: vw(25),
						height: vh(25),
						backgroundColor: 'red',
					}}
				></View>
			</View>
		</View>
	);
};

export default App;
