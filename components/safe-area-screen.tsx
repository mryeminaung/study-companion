import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeAreaScreen({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SafeAreaView className="flex-1 p-5">{children}</SafeAreaView>;
}
