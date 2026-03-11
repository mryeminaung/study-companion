import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeAreaScreen({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SafeAreaView className="flex-1 px-5 pt-5 bg-white">
			{children}
		</SafeAreaView>
	);
}
