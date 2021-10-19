import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import OrderCompleted from './screens/OrderCompleted'


const store =configureStore()

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home}></Stack.Screen>
                    <Stack.Screen name='Restaurant Details' component={RestaurantDetail}></Stack.Screen>
                    <Stack.Screen name='Order Completed' component={OrderCompleted}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
