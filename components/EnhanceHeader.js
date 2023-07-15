import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const EnhanceHeader = ({ navigation }) => {
	return (
		<View
			style={{
				width: "100%",
				paddingBottom: 15,
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			{/* icon */}
			<TouchableOpacity
				onPress={() => {
					navigation.goBack();
				}}
			>
				<Ionicons name="arrow-back" size={26} color="black" />
			</TouchableOpacity>
			<Text style={{ fontWeight: "bold", fontSize: 20, paddingLeft: 10 }}>
				Enhance your mini
			</Text>
		</View>
	);
};

export default EnhanceHeader;

const styles = StyleSheet.create({});
