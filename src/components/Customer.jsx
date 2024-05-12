import React from 'react';

const Customer = () => {
    return (
            <div className="bg-black rounded-2xl w-full xl:w-96 max-h-[800px] flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl text-white font-semibold leading-5 ">Customer</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base text-white font-semibold leading-4 text-left ">David Kent</p>
                                    <p className="text-sm text-gray-300 leading-5 ">10 Previous Orders</p>
                                </div>
                            </div>
    
                            <div className="flex justify-center  text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                {/* <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email"> */}
                                {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg" alt="email"> */}
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg" alt="" />
                                <p className="cursor-pointer text-sm leading-5 text-slate-100 ">david89@gmail.com</p>
                                <p></p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base text-white font-semibold leading-4 text-center md:text-left ">Shipping Address</p>
                                    <p className="w-48 lg:w-full text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 ">180 North King Street, Northhampton MA 1060</p>
                                </div>
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p className="text-base text-white font-semibold leading-4 text-center md:text-left ">Billing Address</p>
                                    <p className="w-48 lg:w-full text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 ">180 North King Street, Northhampton MA 1060</p>
                                </div>
                            </div>
                            <div className="flex w-full justify-center items-center md:justify-start md:items-start mt-6">
                                <button className="mt-6 md:mt-0  hover:bg-blue-700  text-white py-5 bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base  leading-4 ">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
    
    );
}

export default Customer;
