import { RotatingLines } from "react-loader-spinner";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Customers from "../components/Customers";
import DownloadApp from "../components/DownloadApp";
import DiagonalSlider from '../components/Carousel';

import { useState, useEffect } from "react";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className='flex flex-col items-center justify-center mt-40'>
          <h3 className='font-bold mb-10 text-3xl'>Mixi Clothes</h3>
          <RotatingLines strokeColor='black' strokeWidth={4} />
        </div>
      ) : (
        <div>
          <DiagonalSlider />
          <Gallery />
          <Banner />
          <Customers />
          <DownloadApp />
        </div>
      )}
    </div>
  );
}

export default Index;
