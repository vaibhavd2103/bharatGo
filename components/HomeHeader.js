import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const HomeHeader = () => {
	const [online, setOnline] = useState(true);
	return (
		<View style={{ width: "100%", paddingVertical: 15 }}>
			<Text style={{ fontWeight: "bold", textAlign: "left", fontSize: 24 }}>
				Test
			</Text>
			<View
				style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
			>
				{online ? (
					<View
						style={{
							height: 14,
							width: 14,
							borderRadius: 20,
							backgroundColor: "green",
						}}
					></View>
				) : (
					<View></View>
				)}
				<Text style={{ fontSize: 16, paddingLeft: 5 }}>
					You are accepting orders
				</Text>
				{/* icon */}
			</View>
		</View>
	);
};

export default HomeHeader;

const styles = StyleSheet.create({});
