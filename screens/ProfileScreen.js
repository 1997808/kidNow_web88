import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The Profile Index page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ProfileScreen