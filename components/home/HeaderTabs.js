import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs({activeTab,setActiveTab}) {
    // const [activeTab,setActiveTab]= useState('Delivery')

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton text="Delivery" btnColor="black" textcolor="white" activeTab={activeTab} setActiveTab={setActiveTab}></HeaderButton>
            <HeaderButton text="Pickup" btnColor="white" textcolor="black"  activeTab={activeTab} setActiveTab={setActiveTab}></HeaderButton>
        </View>
    )
}


const HeaderButton = (props) => {
    return (

        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black": "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
            }}
            onPress={()=> props.setActiveTab(props.text)}
        
        >
            <Text style={{ color: props.activeTab === props.text ? "white": "black", fontSize: 15, fontWeight: '800' }}>{props.text}</Text>
        </TouchableOpacity>



    )
}