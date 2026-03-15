import { supabase } from "@/lib/supabase";
import { cn } from "@/utils";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, View } from "react-native";

type CourseCardProps = {
	id: number;
	color: string;
	courseName: string;
	studyHours: number;
	newEvent: boolean;
	setNewEvent: (value: boolean) => void;
};

export default function CourseCard({
	id,
	color,
	courseName,
	studyHours,
	newEvent,
	setNewEvent,
}: CourseCardProps) {
	const handleCourseDelete = async (id: number) => {
		await supabase.from("courses").delete().eq("id", id);
		setNewEvent(!newEvent);
	};

	return (
		<View
			className={cn("border border-t-4 rounded-xl p-5 mb-3 border-gray-300")}
			style={{ borderTopColor: color ? color : "#6B7280CC" }}>
			<View className="flex-row items-start justify-between gap-3">
				<View className="flex-row items-center gap-3">
					<Feather
						name="book-open"
						size={28}
						style={{
							backgroundColor: color ? `${color}33` : "#6B728033",
							borderRadius: 8,
							width: 40,
							height: 40,
							textAlignVertical: "center",
							textAlign: "center",
							lineHeight: 32,
						}}
						color={color ? `${color}CC` : "#6B7280CC"}
					/>
					<View>
						<Text className="text-lg font-medium">{courseName}</Text>
						<Text className="text-sm text-gray-600">2h / {studyHours}h</Text>
					</View>
				</View>
				<Feather
					onPress={() => handleCourseDelete(id)}
					name="trash-2"
					size={22}
					color="red"
				/>
			</View>
			<View className="mt-2">
				<View className="flex-row justify-between items-center">
					<Text className="text-sm text-gray-600">Progress</Text>
					<Text className="text-sm text-gray-600">{20}%</Text>
				</View>
				<View className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-1">
					<View
						style={{
							width: `20%`,
							backgroundColor: color,
							height: "100%",
							borderRadius: 999,
						}}
					/>
				</View>
			</View>
		</View>
	);
}
