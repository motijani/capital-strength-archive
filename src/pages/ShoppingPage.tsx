import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const ShoppingPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gym-black text-white">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 color-black">We are currently working on the online store, give us a call @518-433-1703 or visit us in person, sorry for the incovenience</h1>
          <p className="text-xl text-gray-600 mb-4"></p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
