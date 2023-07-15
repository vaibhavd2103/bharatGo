import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EnhanceMiniStepCard = ({
	completed,
	title,
	icon,
	description,
	rightIcon,
}) => {
	return (
		<View
			style={{
				width: "100%",
				borderWidth: 1,
				borderColor: "#0002",
				padding: 15,
				backgroundColor: "#FEFFFE",
				borderRadius: 15,
				marginTop: 15,
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				{/* icon */}
				{icon}
				<Text
					style={{
						fontWeight: "600",
						fontSize: 16,
						paddingLeft: 10,
						maxWidth: "50%",
					}}
				>
					{title}
				</Text>
				<View style={{ position: "absolute", right: 15 }}>
					{completed && rightIcon}
				</View>
			</View>
			{!completed && (
				<Text style={{ fontSize: 14, color: "#aaa", marginTop: 5 }}>
					{description}
				</Text>
			)}
		</View>
	);
};

export default EnhanceMiniStepCard;

const styles = StyleSheet.create({});
