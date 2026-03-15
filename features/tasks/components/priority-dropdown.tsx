import { FormDropdown, type DropdownOption } from "@/components/form-dropdown";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Text, View } from "react-native";

const DATA: DropdownOption[] = [
	{ label: "High", value: "high" },
	{ label: "Medium", value: "medium" },
	{ label: "Low", value: "low" },
];

type PriorityDropdownProps<T extends FieldValues = FieldValues> = {
	control: Control<T>;
	name: Path<T>;
};

export const PriorityDropdown = <T extends FieldValues = FieldValues>({
	control,
	name,
}: PriorityDropdownProps<T>) => {
	const renderItem = (item: DropdownOption, selectedValue: string) => {
		const isSelected = item.value === selectedValue;

		return (
			<View
				className={`flex-row items-center p-3 mx-2 my-1 rounded-xl ${
					isSelected ? "bg-emerald-400" : "bg-transparent"
				}`}>
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
			renderItem={renderItem}
		/>
	);
};
