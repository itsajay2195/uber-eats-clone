import React from 'react'
import { View, Text,Image } from 'react-native'

const yelpRestaurantInfo={
    name:'Farmhouse Kitchen Thai Cuisine',
    image:"https://media-cdn.tripadvisor.com/media/photo-s/17/4c/8c/1a/part-of-the-dining-hall.jpg",
    price:"$$",
    rating:5,
    categories:[{title:"Thai"},{title:"Comfort Food"}],
    reviews:'2913'
}

const {name,image,price,categories, reviews,rating}=yelpRestaurantInfo
const formattedCategories = categories.map((cat) => cat.title).join(" • ");
const description = `${formattedCategories} ${price ? " • "+price :''} 🎫 ${rating} * ${reviews}+` 

 

// const image="https://media-cdn.tripadvisor.com/media/photo-s/17/4c/8c/1a/part-of-the-dining-hall.jpg"
// const title = 'Farmhouse Kitchen Thai cuisine'
// const description = 'Thai * comfort Food * $$ * :ticket * 4 start (2913+)' 

export default function About() {
    return (
        <View>
            <RestaurantImage image={image}></RestaurantImage>
            <RestaurantText name={name}></RestaurantText>
            <RestaurantDescription description={description}></RestaurantDescription>
        </View>
    )
}

const RestaurantImage =(props)=>(
    <Image source={{uri:props.image}} style={{width:'100%',height:100}}></Image>
)

const RestaurantText =(props)=><Text style={{fontSize:29,fontWeight:'600',marginTop:10,marginHorizontal:15}}>{props.title}</Text>

const RestaurantDescription=(props)=><Text style={{marginTop:10,fontSize:15.5,fontWeight:'400',marginHorizontal:15}}>{props.description}</Text>