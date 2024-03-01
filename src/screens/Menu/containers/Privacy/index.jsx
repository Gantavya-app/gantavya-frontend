import React from "react"
import { Text, View, StyleSheet } from "react-native"

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} selectable>
        By using this application, you agree to our privacy policy. We may
        collect and process the following information:
      </Text>
      <Text style={styles.listItem} selectable>
        1. The photo you provide for identification purposes.
      </Text>
      <Text style={styles.listItem} selectable>
        2. Your device's location data to improve the accuracy of the
        identification.
      </Text>
      <Text style={styles.listItem} selectable>
        3. Usage analytics to understand how our application is being used and
        make improvements.
      </Text>
      <Text style={styles.text} selectable>
        We are committed to protecting your privacy and ensuring the security of
        your personal information.
        {"\n\n"}
        For more details, please refer to our full privacy policy.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
    marginVertical: 10,
  },
})

export default PrivacyScreen
