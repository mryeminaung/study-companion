import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

export function ColorPickerModal() {
	const [visible, setVisible] = useState(false);

	return (
		<View>
			<TouchableOpacity
				onPress={() => setVisible(true)}
				className="p-4 bg-blue-500 rounded">
				<Text className="text-white">Open Popup</Text>
			</TouchableOpacity>

			<Modal
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={() => setVisible(false)} // Mandatory for Android back button
			>
				<View className="flex-1 justify-end bg-black/50">
					<View className="bg-white p-6 rounded-t-3xl h-1/2">
						<Text className="text-lg font-bold">Select a Color</Text>
						<TouchableOpacity
							onPress={() => setVisible(false)}
							className="mt-4">
							<Text className="text-blue-500">Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}
