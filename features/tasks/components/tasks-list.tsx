import React from "react";
import { Text, View } from "react-native";
import FilterTabs from "./filter-tabs";
import TaskCard from "./task-card";

export default function TasksList() {
	return (
		<View>
			<FilterTabs />
			<Text className="font-semibold mb-2">To Do (3)</Text>
			<TaskCard
				completed={false}
				color="#FF5733"
				courseName="Mathematics"
				taskTitle="Algebra Homework"
			/>
			<TaskCard
				completed={false}
				color="#33C1FF"
				courseName="Physics"
				taskTitle="Lab Report"
			/>
			<TaskCard
				completed={false}
				color="#8DFF33"
				courseName="Chemistry"
				taskTitle="Organic Chemistry Quiz"
			/>
			<Text className="font-semibold mb-2 mt-5">Completed (2)</Text>
			<TaskCard
				completed={true}
				color="#FF33A6"
				courseName="Biology"
				taskTitle="Genetics Assignment"
			/>
			<TaskCard
				completed={true}
				color="#FFC133"
				courseName="History"
				taskTitle="World War II Essay"
			/>
		</View>
	);
}
