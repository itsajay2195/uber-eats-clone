import React,{useState,useEffect} from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import MenuItem from '../components/restaurantDetail/MenuItem'
import firebase from '../Firebase'

export default function OrderCompleted(props) {
    const { restaurantName, total } = props.route.params
    const [lastOrder, setlastOrder] = useState({
        items: [{
            title: "Paneer Butter Masala",
            description: "Paneer butter masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
            price: "250 INR",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/paneer-butter-masala-recipe.jpg"
        },]
    }
    )

    useEffect(() => {
        const db = firebase.firestore()
        const unsubscribe = db.collection("orders") // this will return a function
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setlastOrder(doc.data())
                })
            })
        return ()=> unsubscribe();
    },[])
    return (
        <SafeAreaView style={{ margin:15,alignItem:'center',backgroundColor: 'white' }}>
            <LottieView style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false} />
            <Text style={{fontSize:20, fontWeight:'700'}}>Your order at {restaurantName} has been placed for {total} INR</Text>
            <ScrollView style={{height:'50%'}} >
                <MenuItem restaurantName={restaurantName} foods={lastOrder.items} checkBoxHidden={true}></MenuItem>
            </ScrollView>

            <LottieView style={{ height: 200, alignSelf: 'center', marginBottom: 30 }}
                source={require("../assets/animations/cooking.json")}
                autoPlay
                speed={0.5}
                loop={false} />

        </SafeAreaView>
    )
}
