import { FormDropdown, type DropdownOption } from "@/components/form-dropdown";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Text, View } from "react-native";

const DATA: DropdownOption[] = [
	{ label: "General", value: "1", color: "black" },
	{ label: "Web Development", value: "2", color: "#10b981" },
	{ label: "Mathematics", value: "3", color: "#10b981" },
	{ label: "Environmental Science", value: "4", color: "#f59e0b" },
	{ label: "Programming", value: "5", color: "#8b5cf6" },
	{ label: "Physics", value: "6", color: "#ef4444" },
	{ label: "Data Structures", value: "7", color: "#ec4899" },
];

type CourseDropdownProps<T extends FieldValues = FieldValues> = {
	control: Control<T>;
	name: Path<T>;
};

export const CourseDropdown = <T extends FieldValues = FieldValues>({
	control,
	name,
}: CourseDropdownProps<T>) => {
	const renderItem = (item: DropdownOption, selectedValue: string) => {
		const isSelected = item.value === selectedValue;

		return (
			<View
				className={`flex-row items-center p-3 mx-2 my-1 rounded-xl ${
					isSelected ? "bg-emerald-400" : "bg-transparent"
				}`}>
				<View
					style={{ backgroundColor: isSelected ? "#8b5cf6" : item.color }}
					className="w-3 h-3 rounded-full mr-3"
				/>
				<Text
					className={`text-sm font-medium ${isSelected ? "text-white" : "text-slate-700"}`}>
					{item.label}
				</Text>
			</View>
		);
	};

	return (
		<FormDropdown
			control={control}
			name={name}
			data={DATA}
			placeholder="Select a course"
			height={45}
			renderItem={renderItem}
			renderLeftIcon={(selectedOption) => (
				<View
					style={{ backgroundColor: selectedOption?.color ?? "#64748b" }}
					className="w-3 h-3 rounded-full mr-2"
				/>
			)}
		/>
	);
};
