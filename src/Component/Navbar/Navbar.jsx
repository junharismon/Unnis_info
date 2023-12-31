import LG from "../../assets/unnis_logo.png";
import banner from "../../assets/unnis_web_top.png";

function Navbar() {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-10 px-10">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4 ">
          <div>
            <a href="#" className="flex items-center">
              <img src={LG} className="w-50 h-10" alt="Unnis Logo" />
            </a>
          </div>

          <div className="" id="navbar-solid-bg">
            
                <a
                  href="#"
                  className="block py-2 text-2xl pl-3 pr-4 text-[#4ABFA1] rounded  "
                  aria-current="page"
                >
                  HOME
                </a>
          </div>
        </div>
      </nav>
      <div className="width-[100vw] column">
        <img src={banner} />
      </div>
    </>
  );
}

export default Navbar;
