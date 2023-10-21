import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MasterPortrait from './MasterPortrait'
import DetailPortrait from './DetailPortrait'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="MasterPortrait"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MasterPortrait" component={MasterPortrait} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="DetailPortrait" component={DetailPortrait} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})