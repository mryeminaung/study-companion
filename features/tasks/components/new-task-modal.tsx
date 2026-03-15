import { FormInput } from "@/components/form-input";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Pressable, Text, View } from "react-native";
import { z } from "zod";
import { CourseDropdown } from "./course-dropdown";
import { PriorityDropdown } from "./priority-dropdown";
import { StatusDropdown } from "./status-dropdown";
import { TaskDate } from "./task-date";

type NewTaskFormValues = {
	taskTitle: string;
	courseId: string;
	authorId: number;
	priority: "high" | "medium" | "low";
	status: "todo" | "pending" | "done";
	dueDate: Date;
};

const newTaskSchema = z.object({
	taskTitle: z.string().trim().min(1, {
		message: "Please enter a task title.",
	}),
	authorId: z.number(),
	courseId: z.string().min(1, {
		message: "Please select a course.",
	}),
	priority: z.enum(["high", "medium", "low"]),
	status: z.enum(["todo", "pending", "done"]),
	dueDate: z.date(),
});

export default function NewTaskModal() {
	const [modalVisible, setModalVisible] = useState(false);

	const { control, handleSubmit, reset, setError, clearErrors } =
		useForm<NewTaskFormValues>({
			defaultValues: {
				taskTitle: "",
				courseId: "1",
				authorId: 1,
				priority: "medium",
				status: "todo",
				dueDate: new Date(),
			},
		});

	const handleCreateTask = (values: NewTaskFormValues) => {
		clearErrors();

		const parsedValues = newTaskSchema.safeParse(values);
		if (!parsedValues.success) {
			for (const issue of parsedValues.error.issues) {
				const fieldName = issue.path[0];
				if (fieldName === "taskTitle" || fieldName === "courseId") {
					setError(fieldName, { message: issue.message });
				}
			}

			return;
		}

		console.log(parsedValues.data);
		setModalVisible(false);
		reset();
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
				onRequestClose={() => {
					setModalVisible(false);
					reset();
				}}>
				<View className="flex-1 justify-end bg-black/20">
					<View className="bg-white p-6 rounded-t-3xl">
						<View className="flex-row items-center justify-between mb-3">
							<Text className="text-xl font-semibold">Add New Task</Text>
							<Feather
								onPress={() => {
									setModalVisible(false);
									reset();
								}}
								name="x"
								size={24}
								color="black"
							/>
						</View>

						{/* course name */}
						<FormInput
							label="Task Title"
							control={control}
							name="taskTitle"
							placeholder="eg. Complete Assignment 1"
						/>

						{/* course selection */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">Select Course</Text>
							<CourseDropdown
								control={control}
								name="courseId"
							/>
						</View>

						{/* priority selection */}
						<View className="flex-row items-center justify-between gap-x-3">
							<View className="mb-3 flex-1">
								<Text className="text-sm mb-2 text-gray-600">Priority</Text>
								<PriorityDropdown
									control={control}
									name="priority"
								/>
							</View>

							{/* status selection */}
							<View className="mb-3 flex-1">
								<Text className="text-sm mb-2 text-gray-600">Status</Text>
								<StatusDropdown
									control={control}
									name="status"
								/>
							</View>
						</View>

						{/* due date */}
						<View className="mb-3">
							<Text className="text-sm mb-2 text-gray-600">Due Date</Text>
							<TaskDate
								control={control}
								name="dueDate"
							/>
						</View>

						<Pressable
							onPress={handleSubmit(handleCreateTask)}
							className="bg-black py-4 rounded-xl items-center">
							<Text className="text-white font-medium">Create Task</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
