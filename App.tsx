import React, { useEffect } from 'react'
import { TabNavigator } from './navigation/tab-navigation'
import * as Font from 'expo-font'

export default function App() {
  function loadFonts() {
    Font.loadAsync({
      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'SpaceMono-Bold': {
        uri: require('./assets/fonts/SpaceMono-Bold.ttf'),
      },
    })
  }

  useEffect(() => {
    loadFonts()
  }, [])

  return <TabNavigator></TabNavigator>
}
