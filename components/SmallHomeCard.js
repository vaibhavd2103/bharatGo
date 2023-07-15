import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SmallHomeCard = ({ style, title, icon }) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#fff",
				borderRadius: 15,
				justifyContent: "center",
				alignItems: "center",
				borderWidth: 1,
				borderColor: "#0002",
				height: "100%",
				...style,
			}}
		>
			{/* icon */}
			{icon}
			<Text style={{ fontSize: 14, color: "#000a" }}>{title}</Text>
		</View>
	);
};

export default SmallHomeCard;

const styles = StyleSheet.create({});
