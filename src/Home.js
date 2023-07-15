import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import HomeHeader from "../components/HomeHeader";
import SmallHomeCard from "../components/SmallHomeCard";
import { DIMENSIONS } from "../constants/constants";
import HomeEnhanceCard from "../components/HomeEnhanceCard";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeMetricsCard from "../components/HomeMetricsCard";

const Home = (props) => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				backgroundColor: "rgb(248,245,252)",
				paddingHorizontal: 15,
			}}
		>
			<StatusBar backgroundColor={"rgb(248,245,252)"} style="dark" />
			<HomeHeader />
			<View style={{ height: 70, alignItems: "center", flexDirection: "row" }}>
				<View
					style={{
						width: DIMENSIONS.WIDTH,
						position: "absolute",
						height: 1,
						backgroundColor: "#0002",
						left: -15,
					}}
				></View>
				<SmallHomeCard
					title={"Analytics"}
					icon={
						<MaterialCommunityIcons
							name="google-analytics"
							size={24}
							color="black"
						/>
					}
				/>
				<SmallHomeCard
					title={"Payouts"}
					style={{ marginHorizontal: 15 }}
					icon={<Feather name="credit-card" size={24} color="black" />}
				/>
				<SmallHomeCard
					title={"Appearance"}
					icon={<AntDesign name="staro" size={24} color="black" />}
				/>
			</View>
			<ScrollView style={{ flex: 1 }}>
				<HomeEnhanceCard navigation={props.navigation} />
				<HomeMetricsCard />
			</ScrollView>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
