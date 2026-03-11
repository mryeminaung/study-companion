import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DATA = [
	{ label: "High", value: "1" },
	{ label: "Medium", value: "2" },
	{ label: "Low", value: "3" },
];

export const PriorityDropdown = () => {
	const [value, setValue] = useState("2");

	const renderItem = (item: any) => {
		const isSelected = item.value === value;

		return (
			<View
				className={`flex-row items-center p-3 mx-2 my-1 rounded-xl ${
					isSelected ? "bg-emerald-400" : "bg-transparent"
				}`}>
				<Text
					className={`text-sm font-medium ${isSelected ? "text-white" : "text-slate-700"}`}>
					{item.label}
				</Text>
			</View>
		);
	};

	return (
		<View>
			<Dropdown
				style={styles.dropdown}
				containerStyle={styles.containerStyle}
				selectedTextStyle={styles.selectedTextStyle}
				data={DATA}
				labelField="label"
				valueField="value"
				value={value}
				flatListProps={{
					initialScrollIndex: DATA.findIndex((i) => i.value === value),
					getItemLayout: (data, index) => ({
						length: 40,
						offset: 40 * index,
						index,
					}),
				}}
				showsVerticalScrollIndicator={false}
				onChange={(item) => setValue(item.value)}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	dropdown: {
		height: 40,
		borderRadius: 10,
		paddingHorizontal: 16,
		borderWidth: 1,
	},
	containerStyle: {
		borderRadius: 20,
		marginTop: 8,
		paddingVertical: 8,
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
	},
	selectedTextStyle: {
		fontSize: 14,
	},
});
