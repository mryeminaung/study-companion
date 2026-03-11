import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, View } from "react-native";

type TaskCardProps = {
	color: string;
	taskTitle: string;
	courseName: string;
	completed: boolean;
};

export default function TaskCard({
	taskTitle,
	color,
	completed,
	courseName,
}: TaskCardProps) {
	return (
		<View
			className="border rounded-xl p-5 border-l-4 border-gray-300 mb-3"
			style={{ borderLeftColor: color ?? "red" }}>
			<View className="flex-row items-start justify-between">
				<View className="flex-row items-center gap-x-3">
					{completed ? (
						<Feather
							name="check-circle"
							size={18}
							color="black"
						/>
					) : (
						<Feather
							name="circle"
							size={18}
							color="black"
						/>
					)}
					<View>
						<Text
							className="font-semibold"
							style={{
								textDecorationLine: completed ? "line-through" : "none",
							}}>
							{taskTitle}
						</Text>
						<View className="flex-row items-center">
							<Text
								className="text-sm font-semibold"
								style={{ color: color }}>
								{courseName}
							</Text>
							<Text className="px-2">.</Text>
							<View className="flex-row items-center gap-x-1">
								<Feather
									name="calendar"
									size={13}
									color="black"
								/>
								<Text className="text-sm">Feb 20</Text>
							</View>
						</View>
					</View>
				</View>
				<Feather
					name="trash-2"
					size={18}
					color="red"
				/>
			</View>
		</View>
	);
}
