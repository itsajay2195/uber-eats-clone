import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    // the following breakdwon is being made in the below piece of cod
    // INR 250 will be striped to 250
    // Number is basically an array and 250 will be added to it.
    // now Number will be like [250,200,200]
    //reduce will help us to add them all like 250+200+200 = 850

    const total = items.map((item) => Number(item.price.replace('INR', '')))
        .reduce((prev, cur) => prev + cur, 0)
    // items.map((item)=>console.log('price is',item.price))
    // console.warn('total is', total)
    return (

        <>
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
                        }}>
                        <Text style={{ color: 'white', fontSize: 19 }}>View Cart</Text>
                        <Text style={{ color: 'white', fontSize: 19 }}> {total} INR</Text>
                    </TouchableOpacity>
                </View>
            </View>:

             <></>}
        </>


    )
}
