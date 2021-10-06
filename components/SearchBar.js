import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const YELP_API_KEY="AOD7r6gtHSX0MddfQV4RRGGfMDsO04h_JwZbMk3CG8HlSVBHLNmzq3yXo4BcBSEElRNthsqFjtU1cIq4NtEWjNheExMoDA1Flt573xh5xERkyiQSbIboNfDaiEFcYXYx" 

export default function SearchBar() {
  

    return (
        <View style={{marginTop:15,flexDirection:'row'}}>
            <GooglePlacesAutocomplete 
            placeholder="Search"
            styles={{
                textInput:{
                    backgroundColor:"#eee",
                    borderRadius:20,
                    fontWeight:'700',
                    marginTop:7
                },
                textInputContainer:{
                    backgroundColor:"#eee",
                    borderRadius:20,
                    flexDirection:'row',
                    alignItems:'center',
                    marginRight:15 // gives me space to add the filter icon
                }
            }}
            renderLeftButton={()=>
            <View style={{marginLeft:5}}> 
                <Ionicons name="location-sharp" size={24}></Ionicons>
            </View>}

            renderRightButton={()=>
                <View 
                  style={{
                      flexDirection:'row',
                      marginRight:8,
                      backgroundColor:'white',
                      padding:9,
                      borderRadius:30,
                      alignItems:"center"
                      }} > 
                    <AntDesign name="clockcircle" size={10} style={{marginRight:6}}></AntDesign>
                    <Text>Search</Text>
                    
                </View>}
            />
        </View>
    )//ojgdskjfljknljkbnljk

                    }
