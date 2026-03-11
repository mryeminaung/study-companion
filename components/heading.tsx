import React from "react";
import { Text, View } from "react-native";

type HeadingProps = {
	title: string;
	subTitle: string;
};

export default function Heading({ title, subTitle }: HeadingProps) {
	return (
		<View className="space-y-1">
			<Text className="text-slate-500">{subTitle}</Text>
			<Text className="text-4xl font-semibold">{title}</Text>
		</View>
	);
}
