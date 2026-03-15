import Heading from "@/components/heading";
import SafeAreaScreen from "@/components/safe-area-screen";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CoursesList from "../components/courses-list";
import NewCourseModal from "../components/new-course-modal";

export default function CoursesScreen() {
	const [newEvent, setNewEvent] = useState(false);

	return (
		<SafeAreaScreen>
			<View className="flex-row items-center justify-between mb-5">
				<Heading
					title="Courses"
					subTitle="Manage Your"
				/>
				<NewCourseModal
					newEvent={newEvent}
					setNewEvent={setNewEvent}
				/>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<CoursesList
					newEvent={newEvent}
					setNewEvent={setNewEvent}
				/>
			</ScrollView>
		</SafeAreaScreen>
	);
}
