import React, { useState,useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categoris from '../components/Categoris'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar'
import { localRestaurants } from '../components/RestaurantItem'


const YELP_API_KEY ="AOD7r6gtHSX0MddfQV4RRGGfMDsO04h_JwZbMk3CG8HlSVBHLNmzq3yXo4BcBSEElRNthsqFjtU1cIq4NtEWjNheExMoDA1Flt573xh5xERkyiQSbIboNfDaiEFcYXYx"
export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const yelpurl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpurl, apiOptions)
        .then(res => res.json())
        .then(json => setRestaurantData(json.businesses))//setRestaurantData(json.businesses)
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [])
    
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categoris></Categoris>
                <RestaurantItem restaurantsData={restaurantData}></RestaurantItem>
            </ScrollView>


        </SafeAreaView>
    )
}
