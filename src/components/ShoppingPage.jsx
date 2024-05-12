import Index from ".";
import { useCart } from "../Contexts/cartContextProvider";
import Customer from "./Customer";
import Header from "./Header";
import { useState,useEffect } from "react";
import { shortenText } from "../helper/helper";
import Swal from 'sweetalert2';


const ShoppingPage = () => {


    const [state,dispatch]=useCart()
    const [currentDate, setCurrentDate] = useState('');
    const discountedTotal = parseFloat(state.total);
    const updatedTotal = discountedTotal + 8.00; 

    useEffect(() => {
      const getCurrentDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedDate = new Date().toLocaleDateString('en-US', options);
        return formattedDate;
      };
      setCurrentDate(getCurrentDate());
    }, []);
       
    const CheckOutHandler=()=>{
        
    }

    const clickHandler=(type)=>{
        dispatch({type,payload:state})
                if(type==="CHECKOUT"){
              Swal.fire({
                icon: 'success',
                title: 'Thank You!',
                text: 'Thanks for your purchase.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              });
            }
     }
 

    return (
        <>
            {/* <Header/> */}
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col">
                <p className="text-base font-medium leading-6 current-date">{currentDate}</p>
            </div> 
            <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-black rounded-2xl px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl text-white font-semibold leading-6 xl:leading-5 ">Customer’s Cart</p>
                        {!state.selectedItems.length?<p className="mt-4 text-gray-300 text-lg">go to store and find something</p>:state.selectedItems.map((item)=>(<SelectedItems item={item} key={item.id} state={state} dispatch={dispatch}/>))}
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col rounded-2xl px-4 py-6 md:p-6 xl:p-8 w-full bg-black space-y-6">
                            <h3 className="text-xl text-white font-semibold leading-5 ">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200  border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base text-white leading-4 ">Subtotal</p>
                                    <p className="text-base text-gray-300 leading-4 ">${state.total}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base text-white leading-4 ">Discount</p>
                                    {/* <p className="text-base text-gray-300 leading-4 ">- ${(state.total*0.2).toFixed(2)}</p> */}
                                    <p className="text-base text-gray-300 leading-4 ">$0</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base text-white leading-4 ">Shipping</p>
                                    <p className="text-base text-gray-300 leading-4 ">+ $8.00</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base text-white font-semibold leading-4 ">Total</p>
                                {/* <p className="text-base text-gray-300 font-semibold leading-4 ">${(state.total - (state.total * 0.2)).toFixed(2)}</p> */}
                                <p className="text-base text-gray-300 font-semibold leading-4">${updatedTotal.toFixed(2)}</p>
                                {/* <p className="text-base text-gray-300 font-semibold leading-4 ">${lastTotal}</p> */}
                            </div>
                            <div className="w-full flex justify-center items-center mt-4">
              <button onClick={()=>clickHandler("CHECKOUT")} className="hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 py-5 w-96 md:w-full bg-green-600 text-base font-medium leading-4 text-white">Pay Now</button>
            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full rounded-2xl bg-black space-y-6">
                            <h3 className="text-xl text-white font-semibold leading-5 ">Shipping</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 text-white font-semibold ">DPD Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-white ">$8.00</p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className=" hover:bg-gray-700 focus:outline-none focus:ring-2 mt-20 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <Customer/>
            </div>
        </div>
        </>
    );
}

import binIcon from '../assets/bin.svg'

const SelectedItems = ({item,dispatch,state}) => {
    const { image, title, price, quantity } = item;
  
    const prodHandler = (type) => {
      dispatch({ type, payload: item });
    };
  
    return (
        <>
            <div className="mt-4 border-b border-gray-200 pb-6 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div className="flex sm:flex-row flex-col m-auto w-11/12">
                <div className="pb-4 md:m-0 m-auto w-40 max-h-24 my-6">
                  <img className="w-40 h-24 rounded-sm" src={image} alt="dress" />
                </div>
                <div className="  md:flex-row flex-col flex justify-between items-center sm:pl-8 pl-0 w-full pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex md:flex-row flex-col justify-between items-center space-y-8 m-auto">
                    <h3 className="text-xl text-white xl:text-2xl font-semibold leading-6 ">{shortenText(title)}</h3>
                    <p className="text-base text-white xl:text-lg font-semibold leading-6 ">$ {(price * quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:justify-between items-center max-w-1/12 gap-4 justify-end m-auto  sm:m-0">
                {quantity === 1 && (
                  <button onClick={() => prodHandler("REMOVE_ITEM")}>
                    <img
                      src={binIcon}
                      className="rounded-full w-12 h-12 bg-gray-900 py-2 hover:bg-gray-800"
                      alt=""
                    />
                  </button>
                )}
                {quantity > 1 && (
                  <button onClick={() => prodHandler("DECREASE")} className="rounded-full w-12 h-12 bg-gray-900 text-slate-100 py-2 hover:bg-gray-800">
                    -
                  </button>
                )}
                <span className="text-slate-100">{quantity}</span>
                <button onClick={() => prodHandler("INCREASE")} className="rounded-full w-12 h-12 bg-gray-900 text-slate-100 py-2 hover:bg-gray-800">
                  +
                </button>
              </div>
            </div>
        </>   
    );
  };
  
  
// export default selectedItems;

export default ShoppingPage;
