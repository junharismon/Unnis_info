import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isActive, setActive] = useState("")

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const handleItemClick = (itemName) => {
    setActive(itemName)
  };

  return (
    <>
      <p className="text-slate-500 sidebar-release">Release notes</p>
      <div>
        <button
          type="button"
          className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  mr-1 ${
            isDropdownOpen
              ? "hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 bg-gray-200"
              : "mr-16"
          }`}
          onClick={toggleDropdown}
        >
          <span className="flex-1 ml-1 text-left whitespace-nowrap">2021</span>
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
                isActive == "September2021" ?  "bg-gray-200" :""
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
                isActive == "October2021" ?  "bg-gray-200" :""
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
                isActive == "November2021" ?  "bg-gray-200" :""
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
                isActive == "Desember2021" ?  "bg-gray-200" :""
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
            isDropdownOpen1
              ? "hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 bg-gray-200"
              : "mr-16"
          }`}
          onClick={toggleDropdown1}
        >
          <span className="flex-1 ml-1 text-left whitespace-nowrap">2022</span>
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
          } py-2 space-y-2 pl-10`}
        >
          <li>
            <Link
              to={"/January2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "January2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("January2022")}
              >
              January
            </Link>
          </li>
          <li>
            <Link
              to={"/February2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "February2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("February2022")}
              >
              February
            </Link>
          </li>
          <li>
            <Link
              to={"/March2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "March2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("March2022")}
              >
              March
            </Link>
          </li>
          <li>
            <Link
              to={"/April2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "April2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("April2022")}
              >
              April
            </Link>
          </li>
          <li>
            <Link
              to={"/May2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "May2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("May2022")}
              >
              May
            </Link>
          </li>
          <li>
            <Link
              to={"/June2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "June2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("June2022")}
              >
              June
            </Link>
          </li>
          <li>
            <Link
              to={"/August2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "August2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("August2022")}
              >
              August
            </Link>
          </li>
          <li>
            <Link
              to={"/September2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "September2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("September2022")}
              >
              September
            </Link>
          </li>
          <li>
            <Link
              to={"/October2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "October2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("October2022")}
              >
              October
            </Link>
          </li>
          <li>
            <Link
              to={"/November2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "November2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("November2022")}
              >
              November
            </Link>
          </li>
          <li>
            <Link
              to={"/Desember2022"}
              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-dark dark:hover:bg-gray-100 ${
                isActive == "Desember2022" ?  "bg-gray-200" :""
              }`}
              onClick={() => handleItemClick("Desember2022")}
              >
              Desember
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
