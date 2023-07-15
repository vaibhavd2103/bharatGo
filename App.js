// In App.js in a new project

import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/Home";
import EnhanceMini from "./src/EnhanceMini";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* <NativeBaseProvider> */}
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="EnhanceMini" component={EnhanceMini} />
				</Stack.Navigator>
			</NavigationContainer>
			{/* </NativeBaseProvider> */}
		</SafeAreaView>
	);
}

export default App;
