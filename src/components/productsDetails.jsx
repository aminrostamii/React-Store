import { Link, useParams } from 'react-router-dom';
import { useProductDetails } from '../Contexts/ProductsProvider';
// assets
import backIcon from '../assets/back.svg'
import tagIcon from '../assets/tags.svg'
import priceIcon from '../assets/price.svg'

const ProductsDetails = () => {
    const {id}=useParams()
    const productDetails=useProductDetails(+id)

    const {title, price, description, category, image}=productDetails
    return (
     <div className='md:min-w-8/12 w-10/12 m-auto flex flex-col md:flex-row items-center justify-center min-h-[400px] border-2 border-dotted border-black rounded-2xl mt-10 p-8'>
        <img src={image} alt="" className='w-56 h-56 mb-10' />
        <div className='flex flex-col md:ml-20 m-0'>
            <h3 className=' text-2xl text-blue-800 mb-6'>{title}</h3>
            <p className=' font-sans p-2 min-w-8/12 text-base'>{description}</p>
            {category==="men's clothing" || category==="women's clothing"? <ul className='flex flex-row my-4'>
                    <li className='p-2 mr-2 w-10 h-10 cursor-pointer text-center rounded-full bg-gray-400 border-2 text-slate-900 font-bold text-sm'>sm</li>
                    <li className='p-2 mr-2 w-10 h-10 cursor-pointer text-center rounded-full bg-gray-400 border-2 text-slate-900 font-bold text-sm'>md</li>
                    <li className='p-2 mr-2 w-10 h-10 cursor-pointer text-center rounded-full bg-gray-400 border-2 text-slate-900 font-bold text-sm'>lg</li>
                    <li className='p-2 mr-2 w-10 h-10 cursor-pointer text-center rounded-full bg-gray-400 border-2 text-slate-900 font-bold text-sm'>xl</li>
                </ul>:null}
            <p className='flex flex-row items-center text-blue-800'>
                <img src={tagIcon} className='w-8 h-8 pr-2' alt="" />
                {category}
                </p>
            <div className='flex flex-row justify-between items-start'>
                <span className='flex flex-row items-center text-blue-800 text-xl'>
                <img src={priceIcon} className='w-10 h-10 pr-2' alt="" />
                    {price} $
                </span>
                <Link to={'/products'} className='bg-blue-800 p-3 rounded-lg flex flex-row items-center text-slate-100 font-bold hover:bg-blue-500 '>
                Back to Shop 
                <img src={backIcon} className='w-8 h-8 pl-2' alt="" />
                </Link>
            </div>
        </div>
     </div>
    );
}

export default ProductsDetails;
