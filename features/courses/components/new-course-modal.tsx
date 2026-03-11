import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { COURSE_COLORS } from "../constants/colors";

export default function NewCourseModal() {
	const [selectedColor, setSelectedColor] = useState<{
		id: number;
		name: string;
		hex: string;
	}>(COURSE_COLORS[0]);

	const [modalVisible, setModalVisible] = useState(false);

	const [courseData, setCourseData] = useState({
		courseName: "",
		color: "",
		studyHours: 0,
	});

	const handleInputChange = (field: string, value: string | number) => {
		setCourseData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleCourseSubmission = () => {
		console.log(courseData);
		setModalVisible(false);
		setCourseData({
			courseName: "",
			color: "",
			studyHours: 0,
		});
	};

	return (
		<View>
			<Feather
				onPress={() => setModalVisible(true)}
				name="plus"
				size={20}
				style={{
					backgroundColor: "#000000",
					borderRadius: 8,
					width: 42,
					height: 42,
					textAlignVertical: "center",
					textAlign: "center",
					lineHeight: 32,
				}}
				color={"#FFFFFF"}
			/>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)} // Mandatory for Android back button
			>
				<View className="flex-1 justify-end bg-black/20">
					<View className="bg-white p-6 rounded-t-3xl">
						<View className="flex-row items-center justify-between mb-3">
							<Text className="text-xl font-semibold">Add New Course</Text>
							<Feather
								onPress={() => setModalVisible(false)}
								name="x"
								size={24}
								color="black"
							/>
						</View>

						{/* course name */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">Course Name</Text>
							<TextInput
								onChangeText={(value) => handleInputChange("courseName", value)}
								className="border p-4 rounded-xl"
								placeholder="eg. Mathematics"
							/>
						</View>

						{/* study hours */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">
								Total Study Hours Goal
							</Text>
							<TextInput
								onChangeText={(value) => handleInputChange("studyHours", value)}
								className="border p-4 rounded-xl"
								keyboardType="number-pad"
								placeholder="eg. 10"
							/>
						</View>

						{/* color picker */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">
								Choose Course Color
							</Text>
							<View className="flex-row flex-wrap gap-2">
								{COURSE_COLORS.map((color) => (
									<Pressable
										key={color.id}
										style={{
											backgroundColor: color.hex,
											borderWidth: selectedColor.id === color.id ? 2 : 0,
										}}
										onPress={() => {
											setSelectedColor(color);
											handleInputChange("color", color.hex);
										}}
										className="rounded-full h-[45px] w-[45px]"
									/>
								))}
							</View>
						</View>
						<Pressable
							onPress={handleCourseSubmission}
							className="bg-black py-4 rounded-xl items-center">
							<Text className="text-white font-medium">Create Course</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
