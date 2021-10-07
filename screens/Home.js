import React, { useState,useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categoris from '../components/home/Categoris'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItem from '../components/home/RestaurantItem'
import SearchBar from '../components/home/SearchBar'
import { localRestaurants } from '../components/home/RestaurantItem'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTabs from '../components/home/BottomTabs'


const YELP_API_KEY ="AOD7r6gtHSX0MddfQV4RRGGfMDsO04h_JwZbMk3CG8HlSVBHLNmzq3yXo4BcBSEElRNthsqFjtU1cIq4NtEWjNheExMoDA1Flt573xh5xERkyiQSbIboNfDaiEFcYXYx"
export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city,setCity] = useState("San Francisco")
    const [activeTab,setActiveTab] = useState("Delivery")

    const getRestaurantsFromYelp = () => {
        const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpurl, apiOptions)
        .then(res => res.json())
        .then(json => setRestaurantData(json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase()))))//setRestaurantData(json.businesses)
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city,activeTab])// this hook will execute whenever the value of the state "City" and "activeTab"is changed.
    
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs activeTab={activeTab}  setActiveTab={setActiveTab}/>
                <SearchBar cityHandler = {setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categoris></Categoris>
                <RestaurantItem restaurantsData={restaurantData}></RestaurantItem>
            </ScrollView>
            <Divider width={1}></Divider>
            <BottomTabs></BottomTabs>

        </SafeAreaView>
    )
}
