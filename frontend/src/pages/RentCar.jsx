import React from "react";
import SearchBox from "../component/SearchBox";
import RentalFilter from "../component/RentalFilter";
import VehicleList from "../component/VehicleList";
import { Link } from "react-router-dom";

const RentCar = () => {
  return (
    <div className="mt-24 font-poppins lg:mt-0 min-h-screen">
      <div className="flex flex-wrap mt-24">
        <SearchBox />
      </div>
      <div className="lg:px-12 xl:px-12 2xl:px-48">
        <nav
          className="flex bg-white mx-2 sm:mx-8 xl:mx-0 mt-8 lg:mt-28 text-black py-3 px-2 rounded-lg "
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="text-sm text-black hover:text-gray-500 font-medium inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium dark:text-gray-500">
                  Explore Car
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-wrap mt-4 lg:px-8 xl:px-12 2xl:px-40">
        <div className="w-full lg:w-1/5">
          <RentalFilter />
        </div>

        <div className="w-full lg:w-4/5">
          <VehicleList />
        </div>
      </div>
    </div>
  );
};

export default RentCar;
