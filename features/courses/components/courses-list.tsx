import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import CourseCard from "./course-card";

type Course = {
	id: number;
	name: string;
	study_hour: number;
	color: string;
	author_id: number;
	created_at: string;
};

export default function CoursesList({
	newEvent,
	setNewEvent,
}: {
	newEvent: boolean;
	setNewEvent: (value: boolean) => void;
}) {
	const [courses, setCourses] = useState<Course[] | null>([]);

	useEffect(() => {
		let fetchData = async () => {
			const res = await supabase.from("courses").select("*");
			setCourses(res.data);
		};
		fetchData();
	}, [newEvent]);

	return (
		<>
			{courses?.map((course) => (
				<CourseCard
					key={course.id}
					id={course.id}
					courseName={course.name}
					color={course.color}
					studyHours={course.study_hour}
					newEvent={newEvent}
					setNewEvent={setNewEvent}
				/>
			))}
		</>
	);
}
