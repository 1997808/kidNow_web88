import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PaymentScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The Payment page</Text>
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


export default PaymentScreen