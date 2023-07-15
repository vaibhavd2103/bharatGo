import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { Progress } from "native-base";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeEnhanceCard = ({ navigation }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: "#fff",
				borderRadius: 15,
				borderWidth: 1,
				borderColor: "#0002",
				// padding: 15,
				width: "100%",
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
					<Text style={{ fontSize: 16, fontWeight: "bold" }}>
						Enhance your mini
					</Text>
					<Text
						style={{
							fontSize: 12,
							fontWeight: "bold",
							color: MD3Colors.primary40,
						}}
					>
						70% complete
					</Text>
				</View>
				<ProgressBar
					progress={0.7}
					color={MD3Colors.primary40}
					style={{ height: 8, borderRadius: 10, marginVertical: 15 }}
				/>
				{/* <Progress value={45} mx="4" /> */}
				<View
					style={{
						backgroundColor: "rgb(240,241,245)",
						padding: 15,
						borderWidth: 1,
						borderColor: "#0002",
						borderRadius: 15,
						marginTop: 5,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: 5,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							{/* icon */}
							<Feather name="image" size={20} color="black" />
							<Text style={{ fontWeight: "bold", paddingLeft: 5 }}>
								Add your store logo
							</Text>
						</View>
						{/* icon */}
						<MaterialCommunityIcons
							name="dots-vertical"
							size={18}
							color="#0006"
						/>
					</View>
					<Text style={{ fontSize: 12, color: "#999" }}>
						For old and new customers to recognize your store and build trust
					</Text>
				</View>
				<Text
					style={{
						color: "green",
						fontWeight: "bold",
						marginVertical: 10,
						fontSize: 12,
					}}
				>
					More profile actions
				</Text>
			</View>
			<View
				style={{
					backgroundColor: "#FDF5F6",
					width: "100%",
					padding: 15,
					borderBottomLeftRadius: 15,
					borderBottomRightRadius: 15,
				}}
			>
				<Text style={{ color: "#0007", maxWidth: "40%", fontWeight: "500" }}>
					Some great minis to check out {">"}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default HomeEnhanceCard;

const styles = StyleSheet.create({});
