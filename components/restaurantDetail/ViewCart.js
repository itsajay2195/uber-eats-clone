import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import firebase from '../../Firebase'

export default function ViewCart({navigation}) {
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const [modalVisible, setModalVisible] = useState(false)

    // the following breakdwon is being made in the below piece of cod
    // INR 250 will be striped to 250
    // Number is basically an array and 250 will be added to it.
    // now Number will be like [250,200,200]
    //reduce will help us to add them all like 250+200+200 = 850

    const total = items.map((item) => Number(item.price.replace('INR', '')))
        .reduce((prev, cur) => prev + cur, 0)

    const addOrderToFirebase=()=>{
        const db = firebase.firestore(); 
        db.collection("orders").add({
            items:items,
            restaurantName:restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),

        })
        setModalVisible(false)
        navigation.navigate('Order Completed',{restaurantName:restaurantName,total:total})

    }   
    
    

    const styles = StyleSheet.create({
        modalContaier: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        },
        modalCheckoutContaier: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1
        },
        modalRestaurantName: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: '10%'
        },
        modalFoodItemsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: '2%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            marginBottom: '4%'
        },
        subtotalText: {
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10
        }
    })
    const checkoutModal = () => {
        return (
            <View style={styles.modalContaier}>
                <View style={styles.modalCheckoutContaier}>
                    <Text style={styles.modalRestaurantName}>{restaurantName}</Text>
                    {items.map((item, index) => (
                        <View style={styles.modalFoodItemsContainer}>
                            <Text style={{ paddingHorizontal: '8%', fontWeight: '600', fontSize: 15 }}>{item.title}</Text>
                            <Text style={{ paddingHorizontal: '8%', color: 'gray' }}> {item.price}</Text>
                        </View>))}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.subtotalText}> Subtotal</Text>
                        <Text style={{ color: 'gray', fontSize: 15 }}> {total} INR</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <TouchableOpacity
                            style={{
                                marginHorizontal: '20%',
                                padding:10,
                                borderRadius: 30,
                                flexDirection: 'row',
                                justifyContent:'center',
                                backgroundColor: 'black',
                            }}
                            onPress={() =>addOrderToFirebase()}>
                            <Text style={{ color: 'white' }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                

            </View>
        )
    }

    return (

        <>
            <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>

                {checkoutModal()}

            </Modal>
            {total ?

                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: '20%', alignItems: 'center', position: 'absolute', bottom: '10%', zIndex: 999 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: "100%" }}>
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                padding: 13,
                                width: '100%',
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                                backgroundColor: 'black',
                                borderRadius: 30,
                            }}
                            onPress={() => setModalVisible(true)}>
                            <Text style={{ color: 'white', fontSize: 19 }}>View Cart</Text>
                            <Text style={{ color: 'white', fontSize: 19 }}> {total} INR</Text>
                        </TouchableOpacity>
                    </View>
                </View> :

                <></>}
        </>


    )
}
