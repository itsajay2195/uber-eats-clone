import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categoris from '../components/Categoris'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar'


export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categoris></Categoris>
                <RestaurantItem></RestaurantItem>
            </ScrollView>


        </SafeAreaView>
    )
}
