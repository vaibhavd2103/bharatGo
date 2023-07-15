import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { Progress } from "native-base";
import { ProgressBar, MD3Colors } from "react-native-paper";
import {
	Entypo,
	Feather,
	FontAwesome,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { DIMENSIONS } from "../constants/constants";

const HomeMetricsCard = ({ navigation }) => {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				borderRadius: 15,
				borderWidth: 1,
				borderColor: "#0002",
				// padding: 15,
				width: DIMENSIONS.WIDTH - 30,
			}}
			onPress={() => {
				navigation?.navigate("EnhanceMini");
			}}
		>
			<View style={{ padding: 15 }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontSize: 16, fontWeight: "bold" }}>Top metrics</Text>
					<TouchableOpacity
						style={{
							backgroundColor: "#eee",
							borderRadius: 20,
							padding: 10,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							borderWidth: 1,
							borderColor: "#000",
							paddingVertical: 7,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								marginRight: 5,
							}}
						>
							Today
						</Text>
						<Feather name="calendar" size={16} color="black" />
					</TouchableOpacity>
				</View>
				<View
					style={{
						height: 1,
						width: "100%",
						backgroundColor: "#0002",
						marginVertical: 15,
					}}
				></View>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<View style={{ flex: 1, alignItems: "flex-start" }}>
						<Text style={{ color: "#555", fontWeight: "600", fontSize: 12 }}>
							Total orders
						</Text>
						<Text
							style={{
								color: "#000",
								fontWeight: "800",
								fontSize: 20,
								paddingVertical: 10,
							}}
						>
							0
						</Text>
						<Text style={{ color: "#888", fontWeight: "400", fontSize: 12 }}>
							vs. 0 orders
						</Text>
						<Text style={{ color: "#aaa", fontWeight: "400", fontSize: 12 }}>
							last Thu, 13 Jul
						</Text>
					</View>
					<View style={{ flex: 1, alignItems: "flex-start" }}>
						<Text style={{ color: "#555", fontWeight: "600", fontSize: 12 }}>
							Orders amount
						</Text>
						<Text
							style={{
								color: "#000",
								fontWeight: "800",
								fontSize: 20,
								paddingVertical: 10,
							}}
						>
							0
						</Text>
						<Text style={{ color: "#888", fontWeight: "400", fontSize: 12 }}>
							vs. 0 orders
						</Text>
						<Text style={{ color: "#aaa", fontWeight: "400", fontSize: 12 }}>
							last Thu, 13 Jul
						</Text>
					</View>
				</View>
				<TouchableOpacity
					style={{
						padding: 15,
						borderWidth: 1,
						borderColor: "#0002",
						borderRadius: 15,
						marginTop: 15,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							color: "green",
							fontWeight: "bold",
							fontSize: 14,
						}}
					>
						Show all metrics
					</Text>
					{/* icon */}
					<FontAwesome name="arrow-circle-right" size={24} color="green" />
				</TouchableOpacity>
			</View>
			<View
				style={{
					backgroundColor: "#F1EFF5",
					// width: "100%",
					padding: 15,
					borderBottomLeftRadius: 15,
					borderBottomRightRadius: 15,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: DIMENSIONS.WIDTH - 30,
				}}
			>
				<View style={{ maxWidth: "70%" }}>
					<Text style={{ color: "purple", fontWeight: "800" }}>
						Share your store!
					</Text>
					<Text
						style={{
							color: "purple",
							fontWeight: "500",
							fontSize: 10,
						}}
					>
						To get the dice rolling
					</Text>
				</View>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text style={{ color: "purple", fontWeight: "800", fontSize: 12 }}>
						Share
					</Text>
					{/* icon */}
					<Entypo name="share" size={14} color="purple" />
				</View>
			</View>
		</View>
	);
};

export default HomeMetricsCard;

const styles = StyleSheet.create({});
