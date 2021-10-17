import React from 'react'
import { View, Text } from 'react-native'

export default function OrderItem({props}) {
    const {title,price}= props
    return (
        <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'600', fontSize:16}}>{title}</Text>
            <Text style={{fontWeight:'600', fontSize:16}}>{price}</Text>
        </View>
    )
}
