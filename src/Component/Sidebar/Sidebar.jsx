import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const [isActive, setActive] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const handleItemClick = (itemName) => {
    setActive(itemName);
  };

  return (
    <>
      <p className="text-[#C8C8C8] text-lg mb-6">
        <b>Release Notes</b>
      </p>
      <div>
        <button
          type="button"
          className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  mr-1 ${
            isDropdownOpen
              ? "text-green-500"
              : "mr-16"
          }`}
          onClick={toggleDropdown}
        >
          <span className="flex-1 ml-1 text-left whitespace-nowrap">
            Android
          </span>
          <svg
            className={`w-3 h-3 transition-transform duration-75 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <ul
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } py-2 space-y-2 `}
        >
                <li>
            <Link
              to={"/Android2024"}
              className={`flex items-center w-full p-2 pl-5 text-gray-900 transition duration-75  group hover:text-[#4ABFA1] dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Android2024" ? "bg-[#C0FBEC]  text-[#4ABFA1] w-full" : ""
              }`}
              onClick={() => handleItemClick("Android2024")}
            >
              2024
            </Link>
          </li>
          <li>
            <Link
              to={"/Android2023"}
              className={`flex items-center w-full p-2 pl-5 text-gray-900 transition duration-75  group hover:text-[#4ABFA1] dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Android2023" ? "bg-[#C0FBEC]  text-[#4ABFA1] w-full" : ""
              }`}
              onClick={() => handleItemClick("Android2023")}
            >
              2023
            </Link>
          </li>
          <li>
            <Link
              to={"/Android2022"}
              className={`flex items-center w-full p-2 pl-5 text-gray-900 transition duration-75  group hover:text-[#4ABFA1] dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Android2022" ? "bg-[#C0FBEC]  text-[#4ABFA1] w-full" : ""
              }`}
              onClick={() => handleItemClick("Android2022")}
            >
              2022
            </Link>
          </li>
          <li>
            <Link
              to={"/Android2021"}
              className={`flex items-center w-full p-2 pl-5 text-gray-900 transition duration-75  group hover:text-[#4ABFA1] dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Android2021" ? "bg-[#C0FBEC]  text-[#4ABFA1] w-full" : ""
              }`}
              onClick={() => handleItemClick("Android2021")}
            >
              2021
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  mr-1 ${
            isDropdownOpen1
              ? "text-green-500"
              : "mr-16"
          }`}
          onClick={toggleDropdown1}
        >
          <span className="flex-1 ml-1 text-left whitespace-nowrap">Ios</span>
          <svg
            className={`w-3 h-3 transition-transform duration-75 ${
              isDropdownOpen1 ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <ul
          className={`${
            isDropdownOpen1 ? "block" : "hidden"
          } py-2 space-y-2`}
        >
               <li>
            <Link
              to={"/Ios2024"}
              className={`flex items-center w-full p-2 pl-5 text-gray-900 transition duration-75  group hover:text-[#4ABFA1] dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Ios2024" ? "bg-[#C0FBEC]  text-[#4ABFA1] w-full" : ""
              }`}
              onClick={() => handleItemClick("Ios2024")}
            >
              2024
            </Link>
          </li>
          <li>
            <Link
              to={"/Ios2023"}
              className={`flex items-center w-full p-2 pl-5 text-gray-900 transition duration-75  group hover:text-[#4ABFA1] dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Ios2023" ? "bg-[#C0FBEC]  text-[#4ABFA1] w-full" : ""
              }`}
              onClick={() => handleItemClick("Ios2023")}
            >
              2023
            </Link>
          </li>
          <li>
            <Link
              to={"/Ios2022"}
              className={`flex items-center w-full p-2 pl-5 text-gray-900 transition duration-75  group hover:text-[#4ABFA1] dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Ios2022" ? "bg-[#C0FBEC]  text-[#4ABFA1] w-full" : ""
              }`}
              onClick={() => handleItemClick("Ios2022")}
            >
              2022
            </Link>
          </li>
         
        </ul>
      </div>
      {/* <div>
        <button
          type="button"
          className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  mr-1 ${
            isDropdownOpen
              ? "hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 bg-gray-200"
              : "mr-16"
          }`}
          onClick={toggleDropdown}
        >
          <span className="flex-1 ml-1 text-left whitespace-nowrap">
            Android
          </span>
          <svg
            className={`w-3 h-3 transition-transform duration-75 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <ul
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } py-2 space-y-2 pl-10`}
        >
          <li>
            <Link
              to={"/September2021"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "September2021" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("September2021")}
            >
              September
            </Link>
          </li>
          <li>
            <Link
              to={"/October2021"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "October2021" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("October2021")}
            >
              October
            </Link>
          </li>
          <li>
            <Link
              to={"/November2021"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "November2021" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("November2021")}
            >
              November
            </Link>
          </li>
          <li>
            <Link
              to={"/Desember2021"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Desember2021" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("Desember2021")}
            >
              Desember
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  mr-1 ${
            isDropdownOpen2
              ? "hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-200"
              : "mr-16"
          }`}
          onClick={toggleDropdown2}
        >
          <span className="flex-1 ml-1 text-left whitespace-nowrap">2023</span>
          <svg
            className={`w-3 h-3 transition-transform duration-75 ${
              isDropdownOpen2 ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <ul
          className={`${
            isDropdownOpen2 ? "block" : "hidden"
          } py-2 space-y-2 pl-10`}
        >
          <li>
            <Link
              to={"/January2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "January2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("January2023")}
            >
              January
            </Link>
          </li>
          <li>
            <Link
              to={"/February2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "February2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("February2023")}
            >
              February
            </Link>
          </li>
          <li>
            <Link
              to={"/March2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "February2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("March2023")}
            >
              March
            </Link>
          </li>
          <li>
            <Link
              to={"/April2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "April2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("April2023")}
            >
              April
            </Link>
          </li>
          <li>
            <Link
              to={"/May2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "May2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("May2023")}
            >
              May
            </Link>
          </li>
          <li>
            <Link
              to={"/June2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "June2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("June2023")}
            >
              June
            </Link>
          </li>
          <li>
            <Link
              to={"/July2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "July2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("July2023")}
            >
              July
            </Link>
          </li>
          <li>
            <Link
              to={"/August2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "August2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("August2023")}
            >
              August
            </Link>
          </li>
          <li>
            <Link
              to={"/September2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "September2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("September2023")}
            >
              September
            </Link>
          </li>
          <li>
            <Link
              to={"/October2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "October2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("October2023")}
            >
              October
            </Link>
          </li>
          <li>
            <Link
              to={"/November2023"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                isActive == "November2023" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("November2023")}
            >
              November
            </Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default Sidebar;
