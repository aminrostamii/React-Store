import { createContext,useContext,useReducer } from "react";
import { sumProducts } from "../helper/helper";


const cartContext=createContext()

const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkOut:false,
}
const reducer=(state,action)=>{
  switch (action.type) {
    case "ADD_ITEM":
       if(!state.selectedItems.find(item=>item.id===action.payload.id)){
          state.selectedItems.push({...action.payload,quantity:1})
       }
       return{
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut:false,
    }
    case "REMOVE_ITEM":
        const newSelectedItems=state.selectedItems.filter(item=>item.id!==action.payload.id)
         return{
            ...state,
            selectedItems:[...newSelectedItems]
            ,...sumProducts(newSelectedItems)
         }
         case "INCREASE":
           const addIndex=state.selectedItems.findIndex(item=>item.id===action.payload.id)
           state.selectedItems[addIndex].quantity++
           return{
            ...state,
            ...sumProducts(state.selectedItems)
           }
         case "DECREASE":
            const decreaseIndex=state.selectedItems.findIndex(item=>item.id===action.payload.id)
            state.selectedItems[decreaseIndex].quantity--
            return{
             ...state,
             ...sumProducts(state.selectedItems)
            }
            case 'CHECKOUT':
                return{
                    selectedItems:[],
                    itemsCounter:0,
                    total:0,
                    checkOut:true
                }
    default:
    throw new Error('invalid');
  }
}

const CartContextProvider = ({children}) => {
  const [state,dispatch] =useReducer(reducer,initialState)
    return (
        <cartContext.Provider value={{ state,dispatch }}>
            {children}
        </cartContext.Provider>
    );
}


const useCart=()=>{
   const {state,dispatch}=useContext(cartContext)
   return [state,dispatch]
}

export default CartContextProvider;
export {useCart}
