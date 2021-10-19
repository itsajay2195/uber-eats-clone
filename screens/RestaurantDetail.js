import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'



const foods = [{
    title: "Paneer Butter Masala",
    description: "Paneer butter masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
    price: "250 INR",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/paneer-butter-masala-recipe.jpg"
},
{
    title: "Green Peas Masala",
    description: "Greemn Peas Masala,is a rich & creamy curry made with Gren Peas, spices, onions, tomatoes, cashews and butter.",
    price: "250 INR",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/matar-masala-recipe-2.jpg"
},
{
    title: "Aloo Gobi Masala",
    description: "Aloo Gobi Masala,is a rich & creamy curry made with Aloo,Gobi, spices, onions, tomatoes, cashews and butter.",
    price: "250 INR",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/03/aloo-gobi-recipe-500x500.jpg"
},
{
    title: "Aloo Gobi Masala",
    description: "Aloo Gobi Masala,is a rich & creamy curry made with Aloo,Gobi, spices, onions, tomatoes, cashews and butter.",
    price: "250 INR",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/chana-masala-recipe.jpg"
}]

export default function RestaurantDetail({route,navigation}) {
    return (
        <View>
            <About route={route}></About>
            <Divider width={1.8} style={{marginVertical:20}}></Divider>
            <MenuItem restaurantName={route.params.name} foods={foods} checkBoxHidden={false}></MenuItem>
            <ViewCart navigation={navigation} restaurantName={route.params.name}></ViewCart>

        </View>
    )
}

 
