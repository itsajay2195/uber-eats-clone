import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const items = [{
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


const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:'600'
    }
})
export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((item, index) => (
                <View  key={index}>
                    <View style={styles.menuItemStyle}>
                    <FoodInfo  food={item}></FoodInfo>
                    <FoodImage food={item}></FoodImage>
                </View>
                    <Divider width={0.5} orientation="vertical" ></Divider>
                </View>
                
                
            ))}
            
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text style={{paddingBottom:10}}>{props.food.description}</Text>
        <Text>{props.food.price}</Text>

    </View>
)

const FoodImage=(props)=>(
    <View>
        <Image source={{uri:props.food.image}} style={{width:100,height:100,borderRadius:8}}></Image>
    </View>
)