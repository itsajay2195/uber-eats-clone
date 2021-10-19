import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'





const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    }
})

export default function MenuItem({restaurantName,checkBoxHidden,foods}) {
    const dispatch = useDispatch();
    const [hideCheckBox,setHideCheckBox] = useState(checkBoxHidden)
    const  selectItem = (item,checkboxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue}
    })
    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)
    const ifFoodInTheCard = (food,cartItems)=>(
        Boolean(cartItems.find(item=>item.title === food.title))
    )


    
    return (
        
        <ScrollView showsVerticalScrollIndicator={false}>
            {console.log('hi',cartItems.length)}
            {foods.map((item, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        {hideCheckBox ? null
                        : <BouncyCheckbox
                        iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                        fillColor="green"
                        isChecked={ifFoodInTheCard(item,cartItems)}
                        onPress={(checkboxValue)=>{
                            selectItem(item,checkboxValue)
                            console.warn('value is',cartItems)}
                        }
                            
                    />}
                        <FoodInfo food={item}></FoodInfo>
                        <FoodImage food={item}></FoodImage>
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} ></Divider>
                </View>


            ))}

        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text style={{ paddingBottom: 10 }}>{props.food.description}</Text>
        <Text>{props.food.price}</Text>

    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{ width: 100, height: 100, borderRadius: 8 }}></Image>
    </View>
)