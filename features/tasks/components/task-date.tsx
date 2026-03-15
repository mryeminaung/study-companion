import Feather from "@expo/vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

type TaskDateProps<T extends FieldValues = FieldValues> = {
	control: Control<T>;
	name: Path<T>;
};

export const TaskDate = <T extends FieldValues = FieldValues>({
	control,
	name,
}: TaskDateProps<T>) => {
	const [show, setShow] = useState(false);

	const showDatepicker = () => {
		setShow(true);
	};

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange }, fieldState: { error } }) => {
				const dateValue = value as Date | string | number | undefined;
				const parsedDate = dateValue ? new Date(dateValue) : undefined;
				const selectedDate =
					parsedDate && !Number.isNaN(parsedDate.getTime())
						? parsedDate
						: undefined;

				return (
					<>
						<Pressable
							onPress={showDatepicker}
							className={`w-full border p-3 rounded-xl ${error ? "border-red-500" : "border-slate-500"}`}>
							<View className="flex-row items-center gap-x-3">
								<Feather
									name="calendar"
									size={18}
									color="black"
								/>
								<Text className="text-sm text-gray-600">
									{selectedDate
										? selectedDate.toLocaleDateString()
										: "Select a date"}
								</Text>
							</View>

							{show && (
								<DateTimePicker
									testID="dateTimePicker"
									value={selectedDate ?? new Date()}
									display="spinner"
									design="material"
									title="Select Task Due Date"
									minimumDate={new Date()}
									onChange={(_, nextDate) => {
										setShow(false);
										if (nextDate) {
											onChange(nextDate);
										}
									}}
								/>
							)}
						</Pressable>
						{error && (
							<Text className="text-red-500 text-xs mt-1">{error.message}</Text>
						)}
					</>
				);
			}}
		/>
	);
};
