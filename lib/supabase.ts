import { createClient, processLock } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import "react-native-url-polyfill/auto";

export const supabase = createClient(
	process.env.EXPO_PUBLIC_SUPABASE_URL!,
	process.env.EXPO_PUBLIC_SUPABASE_KEY!,
	{
		auth: {
			storage: {
				getItem: (key) => SecureStore.getItemAsync(key),
				setItem: (key, value) => SecureStore.setItemAsync(key, value),
				removeItem: (key) => SecureStore.deleteItemAsync(key),
			},
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: false,
			lock: processLock,
		},
	},
);
