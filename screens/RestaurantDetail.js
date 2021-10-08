import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'

export default function RestaurantDetail() {
    return (
        <View>
            <About></About>
            <Divider width={1.8} style={{marginVertical:20}}></Divider>
            <MenuItem></MenuItem>
        </View>
    )
}

 
