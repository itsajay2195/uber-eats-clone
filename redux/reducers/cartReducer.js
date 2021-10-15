let defaultState= {
    selectedItems:{items:[],restaurantName:''}
}

let cartReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':{
            let newState ={...state} 
            if(action.payload.checkboxValue){
                // console.warn("ADD TO CART")
              
                newState.selectedItems={
                    items:[...newState.selectedItems.items,action.payload],
                    restaurantName:action.payload.restaurantName
                    }
            }else{
                // console.warn("REMOVE TO CART")
                newState.selectedItems={
                    items:[...newState.selectedItems.items.filter((item)=> item.title !== action.payload.title)],
                    restaurantName:action.payload.restaurantName
                }

            }
            // console.warn('The sate is', newState)
             return newState

         }
        // case 'REMOVE_FROM_CART':{
        //         let newState ={...state} 
        //         newState.selectedItems={
        //             items:[...newState.selectedItems.items,action.payload],
        //             restaurantName:action.payload.restaurantName
        //         }
        //         console.warn(newState,'🖐' )
        //         return newState
    
        // }     

            

        default:
            return state    
    }
}

export default cartReducer