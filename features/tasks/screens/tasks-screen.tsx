import Heading from "@/components/heading";
import SafeAreaScreen from "@/components/safe-area-screen";
import React from "react";
import { View } from "react-native";
import NewTaskModal from "../components/new-task-modal";
import TasksList from "../components/tasks-list";

export default function TasksScreen() {
	return (
		<SafeAreaScreen>
			<View className="flex-row items-center justify-between mb-5">
				<Heading
					title="Tasks"
					subTitle="Manage Your"
				/>
				<NewTaskModal />
			</View>
			<TasksList />
		</SafeAreaScreen>
	);
}
