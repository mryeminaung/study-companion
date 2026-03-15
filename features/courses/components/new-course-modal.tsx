import { FormInput } from "@/components/form-input";
import { supabase } from "@/lib/supabase";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Modal, Pressable, Text, View } from "react-native";
import { z } from "zod";
import { COURSE_COLORS } from "../constants/colors";

const newCourseSchema = z.object({
	courseName: z
		.string()
		.trim()
		.min(1, { message: "Please enter a course name." }),
	authorId: z.number(),
	studyHours: z
		.string()
		.trim()
		.min(1, { message: "Please enter study hours." })
		.refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
			message: "Please enter a valid number of study hours.",
		}),
	color: z.string().min(1, { message: "Please choose a course color." }),
});

type NewCourseFormValues = z.infer<typeof newCourseSchema>;

export default function NewCourseModal({
	newEvent,
	setNewEvent,
}: {
	newEvent: boolean;
	setNewEvent: (value: boolean) => void;
}) {
	const [modalVisible, setModalVisible] = useState(false);

	const { control, handleSubmit, reset, setError, clearErrors } =
		useForm<NewCourseFormValues>({
			defaultValues: {
				courseName: "",
				studyHours: "",
				color: "",
				authorId: 1,
			},
		});

	const handleCourseSubmission = async (values: NewCourseFormValues) => {
		clearErrors();

		const result = newCourseSchema.safeParse(values);
		if (!result.success) {
			for (const issue of result.error.issues) {
				const field = issue.path[0] as keyof NewCourseFormValues;
				setError(field, { message: issue.message });
			}
			return;
		}
		const { courseName, studyHours, color, authorId } = result.data;

		await supabase.from("courses").insert({
			name: courseName,
			study_hour: Number(studyHours),
			color,
			author_id: authorId,
		});

		setNewEvent(!newEvent);

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
							<Text className="text-xl font-semibold">Add New Course</Text>
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
							label="Course Name"
							control={control}
							name="courseName"
							placeholder="eg. Mathematics"
						/>

						{/* study hours */}
						<FormInput
							label="Total Study Hours Goal"
							control={control}
							name="studyHours"
							keyboardType="number-pad"
							placeholder="eg. 10"
						/>

						{/* color picker */}
						<Controller
							control={control}
							name="color"
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
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
													borderWidth: value === color.hex ? 2 : 0,
												}}
												onPress={() => onChange(color.hex)}
												className="rounded-full h-[45px] w-[45px]"
											/>
										))}
									</View>
									{error && (
										<Text className="text-red-500 text-xs mt-1">
											{error.message}
										</Text>
									)}
								</View>
							)}
						/>

						<Pressable
							onPress={handleSubmit(handleCourseSubmission)}
							className="bg-black py-4 rounded-xl items-center">
							<Text className="text-white font-medium">Create Course</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
