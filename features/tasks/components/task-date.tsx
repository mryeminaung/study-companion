import Feather from "@expo/vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const TaskDate = () => {
	const [date, setDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(null);
	const [show, setShow] = useState(false);

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate;
		setShow(false);
		setSelectedDate(currentDate.toLocaleDateString());
		setDate(currentDate);
	};

	const showDatepicker = () => {
		setShow(true);
	};

	return (
		<Pressable
			onPress={showDatepicker}
			className="w-full border p-3 rounded-xl">
			<View className="flex-row items-center gap-x-3">
				<Feather
					name="calendar"
					size={18}
					color="black"
				/>
				<Text className="text-sm text-gray-600">
					{selectedDate ?? "Select a date"}
				</Text>
			</View>

			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					display="spinner"
					design="material"
					title="Select Task Due Date"
					minimumDate={new Date()}
					onChange={onChange}
				/>
			)}
		</Pressable>
	);
};
