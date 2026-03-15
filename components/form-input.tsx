import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import type { TextInputProps } from "react-native";
import { Text, TextInput, View } from "react-native";

type FormInputProps<T extends FieldValues = FieldValues> = {
	control: Control<T>;
	name: Path<T>;
	label: string;
} & TextInputProps;

export const FormInput = <T extends FieldValues = FieldValues>({
	control,
	name,
	label,
	...textInputProps
}: FormInputProps<T>) => (
	<View className="mb-2">
		<Text className="text-slate-500 mb-1 text-sm font-medium">{label}</Text>
		<Controller
			control={control}
			name={name}
			render={({
				field: { onChange, onBlur, value },
				fieldState: { error },
			}) => (
				<>
					<TextInput
						className={`border p-3 rounded-xl bg-white ${error ? "border-red-500" : "border-slate-500"}`}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						{...textInputProps}
					/>
					{error && (
						<Text className="text-red-500 text-xs mt-1">{error.message}</Text>
					)}
				</>
			)}
		/>
	</View>
);
