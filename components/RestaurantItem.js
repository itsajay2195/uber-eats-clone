import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>

    )
}

const RestaurantImage = () => (
    <>
        <Image source={{ uri: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/e/d/p29410-15743151555dd62493bdda1.jpg?tr=tr:n-xlarge" }}
            style={{ height: 180, width: '100%' }}

        ></Image>
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>FarmHouse kitchen cusine</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 mins</Text>
        </View>
        <View style={{ backgroundColor: '#eee', height: 30, width: 30, justifyContent: "center", alignItems: 'center', borderWidth: 1, borderRadius: 15 }}>
            <Text >4.5</Text>
        </View>

    </View>

)

const RestaurantInfOne = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>FarmHouse kitchen cusine</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 mins</Text>
        </View>
        <View style={{ backgroundColor: '#eee', height: 30, width: 30, justifyContent: "center", alignItems: 'center', borderWidth: 1, borderRadius: 15 }}>
            <Text >4.5</Text>
        </View>

    </View>

)