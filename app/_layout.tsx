import "react-native-reanimated";
import "./global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { supabase } from "@/lib/supabase";
import { cn } from "@/utils";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export const unstable_settings = {
	anchor: "(tabs)",
};

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [instruments, setInstruments] = useState([]);

	useEffect(() => {
		getInstruments();
	}, []);

	async function getInstruments() {
		const { data } = await supabase.from("instruments").select();
		setInstruments(data);
	}

	return (
		<View style={styles.container}>
			<Text
				className={cn(
					"text-2xl font-bold mb-4",
					false ? "text-white" : "text-black",
				)}>
				Instruments
			</Text>
			<FlatList
				data={instruments}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	item: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
});
