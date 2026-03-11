import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DATA = [
	{ label: "General", value: "1", color: "black" },
	{ label: "Web Development", value: "2", color: "#10b981" },
	{ label: "Mathematics", value: "3", color: "#10b981" },
	{ label: "Environmental Science", value: "4", color: "#f59e0b" },
	{ label: "Programming", value: "5", color: "#8b5cf6" },
	{ label: "Physics", value: "6", color: "#ef4444" },
	{ label: "Data Structures", value: "7", color: "#ec4899" },
];

export const CourseDropdown = () => {
	const [value, setValue] = useState("1");

	const renderItem = (item: any) => {
		const isSelected = item.value === value;

		return (
			<View
				className={`flex-row items-center p-3 mx-2 my-1 rounded-xl ${
					isSelected ? "bg-emerald-400" : "bg-transparent"
				}`}>
				<View
					style={{ backgroundColor: isSelected ? "#8b5cf6" : item.color }}
					className="w-3 h-3 rounded-full mr-3"
				/>
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
				placeholder="Select a course"
				value={value}
				flatListProps={{
					initialScrollIndex: DATA.findIndex((i) => i.value === value),
					getItemLayout: (data, index) => ({
						length: 45,
						offset: 45 * index,
						index,
					}),
				}}
				showsVerticalScrollIndicator={false}
				onChange={(item) => setValue(item.value)}
				renderItem={renderItem}
				renderLeftIcon={() => (
					<View
						style={{
							backgroundColor: DATA.find((i) => i.value === value)?.color,
						}}
						className="w-3 h-3 rounded-full mr-2"
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	dropdown: {
		height: 45,
		backgroundColor: "white",
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
