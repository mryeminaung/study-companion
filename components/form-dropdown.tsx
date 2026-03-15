import React from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export type DropdownOption = {
	label: string;
	value: string;
	color?: string;
};

type FormDropdownProps<T extends FieldValues = FieldValues> = {
	control: Control<T>;
	name: Path<T>;
	data: DropdownOption[];
	placeholder?: string;
	renderItem?: (
		item: DropdownOption,
		selectedValue: string,
	) => React.ReactElement | null;
	renderLeftIcon?: (
		selectedOption?: DropdownOption,
	) => React.ReactElement | null;
	height?: number;
};

export const FormDropdown = <T extends FieldValues = FieldValues>({
	control,
	name,
	data,
	placeholder,
	renderItem,
	renderLeftIcon,
	height = 40,
}: FormDropdownProps<T>) => (
	<Controller
		control={control}
		name={name}
		render={({ field: { onChange, value }, fieldState: { error } }) => {
			const selectedValue = typeof value === "string" ? value : "";
			const selectedOption = data.find((item) => item.value === selectedValue);

			return (
				<View>
					<Dropdown
						style={[
							styles.dropdown,
							{ height },
							error ? styles.errorBorder : undefined,
						]}
						containerStyle={styles.containerStyle}
						selectedTextStyle={styles.selectedTextStyle}
						data={data}
						labelField="label"
						valueField="value"
						placeholder={placeholder}
						value={selectedValue}
						showsVerticalScrollIndicator={false}
						onChange={(item: DropdownOption) => onChange(item.value)}
						renderItem={(item) =>
							renderItem
								? renderItem(item as DropdownOption, selectedValue)
								: null
						}
						renderLeftIcon={() =>
							renderLeftIcon ? renderLeftIcon(selectedOption) : null
						}
					/>
					{error && (
						<Text className="text-red-500 text-xs mt-1">{error.message}</Text>
					)}
				</View>
			);
		}}
	/>
);

const styles = StyleSheet.create({
	dropdown: {
		backgroundColor: "white",
		borderRadius: 10,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderColor: "#64748b",
	},
	errorBorder: {
		borderColor: "#ef4444",
	},
	containerStyle: {
		borderRadius: 20,
		marginTop: 8,
		paddingVertical: 8,
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
	},
	selectedTextStyle: {
		fontSize: 14,
	},
});
