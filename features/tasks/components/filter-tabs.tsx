import React from "react";
import { Pressable, Text, View } from "react-native";

export default function FilterTabs() {
	return (
		<View className="border p-1 border-gray-300 bg-gray-100 flex-row items-center justify-start gap-3 rounded-xl mb-4">
			<Pressable
				className="flex-1 border border-gray-300 rounded-lg"
				style={{ backgroundColor: "black" }}>
				<Text className="text-center py-2 text-white">All</Text>
			</Pressable>
			<Pressable
				className="flex-1 border border-gray-300 rounded-lg"
				style={{ backgroundColor: "white" }}>
				<Text className="text-center py-2">Pending</Text>
			</Pressable>
			<Pressable
				className="flex-1 border border-gray-300 rounded-lg"
				style={{ backgroundColor: "white" }}>
				<Text className="text-center py-2">Completed</Text>
			</Pressable>
		</View>
	);
}
