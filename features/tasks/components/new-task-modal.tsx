import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { CourseDropdown } from "./course-dropdown";
import { PriorityDropdown } from "./priority-dropdown";
import { StatusDropdown } from "./status-dropdown";
import { TaskDate } from "./task-date";

export default function NewTaskModal() {
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
							<Text className="text-xl font-semibold">Add New Task</Text>
							<Feather
								onPress={() => setModalVisible(false)}
								name="x"
								size={24}
								color="black"
							/>
						</View>

						{/* course name */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">Task Title</Text>
							<TextInput
								onChangeText={(value) => handleInputChange("courseName", value)}
								className="border p-3 rounded-xl"
								placeholder="eg. Complete Assignment 1"
							/>
						</View>

						{/* course selection */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">
								Select Course (Optional)
							</Text>
							<CourseDropdown />
						</View>

						{/* priority selection */}
						<View className="flex-row items-center justify-between gap-x-3">
							<View className="mb-3 flex-1">
								<Text className="text-sm mb-2 text-gray-600">Priority</Text>
								<PriorityDropdown />
							</View>

							{/* status selection */}
							<View className="mb-3 flex-1">
								<Text className="text-sm mb-2 text-gray-600">Status</Text>
								<StatusDropdown />
							</View>
						</View>

						{/* due date */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">Due Date</Text>
							<TaskDate />
						</View>

						<Pressable
							onPress={handleCourseSubmission}
							className="bg-black py-4 rounded-xl items-center">
							<Text className="text-white font-medium">Create Task</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
