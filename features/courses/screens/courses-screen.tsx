import Heading from "@/components/heading";
import SafeAreaScreen from "@/components/safe-area-screen";
import React from "react";
import { ScrollView, View } from "react-native";
import CourseCard from "../components/course-card";
import NewCourseModal from "../components/new-course-modal";

export default function CoursesScreen() {
	return (
		<SafeAreaScreen>
			<View className="flex-row items-center justify-between mb-5">
				<Heading
					title="Courses"
					subTitle="Manage Your"
				/>
				<NewCourseModal />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<CourseCard
					color="#FF5733"
					progress={60}
					courseName="Chemistry"
				/>
				<CourseCard
					color="#33C1FF"
					progress={30}
					courseName="Physics"
				/>
				<CourseCard
					color="#28A745"
					progress={50}
					courseName="Biology"
				/>
				<CourseCard
					color="#FFC107"
					progress={80}
					courseName="Mathematics"
				/>
				<CourseCard
					color="#6F42C1"
					progress={20}
					courseName="History"
				/>
				<CourseCard
					color="#E83E8C"
					progress={70}
					courseName="English"
				/>
				<CourseCard
					color="#17A2B8"
					progress={40}
					courseName="Geography"
				/>
				<CourseCard
					color="#FD7E14"
					progress={55}
					courseName="Computer Science"
				/>
				<CourseCard
					color="#20C997"
					progress={65}
					courseName="Art"
				/>
				<CourseCard
					color="#343A40"
					progress={35}
					courseName="Music"
				/>
			</ScrollView>
		</SafeAreaScreen>
	);
}
