import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import EnhanceHeader from "../components/EnhanceHeader";
import { MD3Colors, ProgressBar } from "react-native-paper";
import EnhanceMiniStepCard from "../components/EnhanceMiniStepCard";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";

const EnhanceMini = (props) => {
	return (
		<View style={{ flex: 1, padding: 15, backgroundColor: "#FEFFFE" }}>
			<EnhanceHeader navigation={props.navigation} />
			<ScrollView>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						marginTop: 10,
					}}
				>
					<Text style={{ fontSize: 14, fontWeight: "bold" }}>Mini profile</Text>
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
				<Text style={{ fontSize: 16, fontWeight: "500" }}>
					Almost there, just a few more steps to make your store stand out!
				</Text>
				<EnhanceMiniStepCard
					title="Add your store logo"
					description={
						"For old and new customers to recognise your store and build trust"
					}
					icon={<Feather name="image" size={24} color="black" />}
				/>
				<EnhanceMiniStepCard
					title="Add a header image"
					description={"Give a nice visual to your mini when a customer visits"}
					icon={<Feather name="image" size={24} color="black" />}
				/>
				<EnhanceMiniStepCard
					title="Add a store bio"
					description={"Give a brief about your store to customers"}
					icon={<Entypo name="text" size={24} color="black" />}
				/>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text style={{ fontSize: 16, fontWeight: "500", marginTop: 30 }}>
						Completed
					</Text>
					{/* icon */}
				</View>
				<EnhanceMiniStepCard
					completed={true}
					title="Mini name and link added"
					description={
						"For old and new customers to recognise your store and build trust"
					}
					icon={<Entypo name="link" size={24} color="black" />}
					rightIcon={<Feather name="lock" size={24} color="black" />}
				/>
				<EnhanceMiniStepCard
					completed={true}
					title="Payment details added"
					description={"Give a nice visual to your mini when a customer visits"}
					icon={<Feather name="credit-card" size={24} color="black" />}
					rightIcon={<AntDesign name="right" size={24} color="black" />}
				/>
				<EnhanceMiniStepCard
					completed={true}
					title="Add a store bio"
					description={"Give a brief about your store to customers"}
					icon={<Entypo name="text" size={24} color="black" />}
				/>
			</ScrollView>
		</View>
	);
};

export default EnhanceMini;

const styles = StyleSheet.create({});
