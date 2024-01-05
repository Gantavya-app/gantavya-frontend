import { ActivityIndicator, View } from "react-native"

export default function Loading() {
	return (
		<View className="loading">
			<ActivityIndicator />
		</View>
	)
}
