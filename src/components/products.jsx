import React, { useEffect, useState } from 'react';
import { useProducts } from '../Contexts/ProductsProvider';
import { Link, useSearchParams } from 'react-router-dom';
import {shortenText,searchProducts,filterProducts, createQueryObject, productQuantity } from '../helper/helper';
import { RotatingLines } from 'react-loader-spinner';
import SearchBar from './SearchBar';
import Categories from './Categories';
import { useCart } from '../Contexts/cartContextProvider';
import binIcon from '../assets/bin.svg'

const Products = () => {
  const products = useProducts();
  const [displayed,setDisplayed]=useState([])
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState({})
  const [searchParams,setSearchParams]=useSearchParams()

  useEffect(()=>{
      setDisplayed(products)
      const query={};
      const Category=searchParams.get("Category")
      const search=searchParams.get("search")
      if(Category){
        query.Category=Category
      }
      if(search){
        query.search=search
      }
      console.log(query);
      setQuery(query)
  },[products])

  useEffect(()=>{
    setSearchParams(query)
       let finalProducts=searchProducts(products,query.search)
       finalProducts= filterProducts(finalProducts,query.Category)
       setDisplayed(finalProducts)
  },[query])
     
  const searchHandler=()=>{
      setQuery((query)=>createQueryObject(query,{search}))
  }

  const categoriesHandler=(event)=>{
    const {tagName}=event.target
    console.log(tagName);
      const Category=event.target.innerText.toLowerCase()

      if(tagName!=='LI') return;
      setQuery((query)=>createQueryObject(query,{Category}))
  }


  return (
    <>
      {/* <Header /> */}
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between w-full'>
       <SearchBar searchHandler={searchHandler} search={search} setSearch={setSearch}/>
        <Categories categoriesHandler={categoriesHandler}/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8'>
        {displayed.map((p) => (
          <ProductItem key={p.id} data={p} />
        ))}
      </div>
      {!displayed.length && (
        <div className='flex flex-row items-center justify-center '>
          <RotatingLines strokeColor='black' strokeWidth={4} />
        </div>
      )}
    {/* <Footer/> */}
    </>
  );
};

const ProductItem = ({ data }) => {
  const { id, image, title, price } = data;

 const [state,dispatch]=useCart()

   console.log(state)
    const quantity=productQuantity(state,id)

 const prodHandler=(type)=>{
    dispatch({type,payload:data})
 }
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative overflow-hidden">
        <div className='mx-auto' style={{ width: "90%", height: "350px" }}>
          <img className="w-full h-full p-10" src={image} alt={title} />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Link to={`/products/${id}`} className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
            View Product
          </Link>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 h-16 overflow-hidden">
          {shortenText(title)}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-bold text-base md:text-lg">${price}</span>
          <div className='flex flex-row w-auto items-center'>
          {quantity===1 &&  <button onClick={()=>prodHandler("REMOVE_ITEM")} >
            <img src={binIcon} className='rounded-full w-10 h-10 bg-gray-900 py-2 hover:bg-gray-800 ' alt="" />
          </button>}
          {quantity>1 &&
         <button onClick={()=>prodHandler("DECREASE")} className="bg-gray-900 text-white py-2 px-4 rounded-full w-10 h-10 font-bold hover:bg-gray-800">
            -
         </button>}
         {quantity>0 && <span className='p-4 font-2xl font-bold'>{quantity}</span>}
          {quantity===0 ? <button onClick={()=>prodHandler("ADD_ITEM")} className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
            Add to Cart
          </button>:<button onClick={()=>prodHandler("INCREASE")} className="bg-gray-900 text-white py-2 px-4 rounded-full w-10 h-10 font-bold hover:bg-gray-800">
           +
          </button>}
          </div>
        
        
         
           {/* <span className='text-black text-xl'>0</span> */}
         
        </div>
      </div>
    </div>
  );
};

export default Products;
