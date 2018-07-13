import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

import Login from './src/components/Login.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content'/>
        <Login/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
})
