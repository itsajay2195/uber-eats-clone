import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ViewCart() {
    return (
        <View style={{flex:1,flexDirection:'row', paddingHorizontal:'20%', alignItems:'center', position:'absolute',bottom:'10%',zIndex:999}}>
            <View style={{alignItems:'center', justifyContent:'center', width:"100%"}}>
                <TouchableOpacity 
                    style={{
                    marginTop:20,
                    padding:13,
                    width:'100%',
                    justifyContent:'space-around',
                    flexDirection:'row',
                    backgroundColor:'black',
                    borderRadius:30,}}>
                    <Text style={{color:'white',fontSize:19}}>View Cart</Text>
                    <Text style={{color:'white',fontSize:19}}> 200 INR</Text>
                </TouchableOpacity>
            </View>
            
        </View>


    )
}
