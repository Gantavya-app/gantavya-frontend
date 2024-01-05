import { Image, StyleSheet, View } from "react-native"
import logo from "../../../assets/logos/logo_green.png"
import Loading from "../../components/Loading"

export default function SplashScreen() {
	return (
		<View>
			<View>
				<Image source={logo} style={styles.splashLogo} />
				{/* <Image source={logo} alt="logo" /> */}
			</View>

			<View style={styles.splashScreenLoading}>
				<Loading />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	splashLogo: {
		width: 200,
		height: 200,
	},
	splashScreenLoading: {
		marginTop: 100,
	},
})
