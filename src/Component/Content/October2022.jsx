function October2022() {
  return (
    <>
      <div id="content" class="relative lg:ml-20">
        <div class="">
          <div class="text-title text-2xl font-bold space-y-5 text-green-500">
            {" "}
            v2.6.17 (Android) <span className="dateStyle"> 28 October 2022</span>
          </div>
          <div class="text-title text-2xl font-bold space-y-5 text-green-500">
            {" "}
            v1.5.9 (ios) <span className="dateStyle">23 October 2022</span>
          </div>
          <div class="text-2xl font-bold mx-2 my-2">New Features:</div>
          <ul class="list-disc px-20">
            <li class="list-disc">
              {" "}
              Add product review image registration system
            </li>
            <li class="list-disc">
              {" "}
              Add marking to categories with new publications
            </li>{" "}
          </ul>
        </div>
        <div class="text-2xl font-bold mx-2 my-2">Updates:</div>
        <ul class="list-disc px-20">
          <li class="list-disc"> Update product favorites page</li>
          <li class="list-disc"> Modifying the ended event ui</li>
          <li class="list-disc"> Update notification settings</li>
          <li class="list-disc"> Add splash screen</li>
          <li class="list-disc"> Add alert for not connected</li>
          <li class="list-disc">
            {" "}
            Modify product category from 2 lines to 1 line
          </li>
          <li class="list-disc"> Add beauty box review action</li>
          <li class="list-disc"> Add coin terms of use</li>
        </ul>
        <div class="text-2xl font-bold mx-2 my-2">Bug Fixes:</div>
        <ul class="list-disc px-20">
          <li class="list-disc"> Fix pop-up close button error</li>
          <li class="list-disc">
            {" "}
            Modify page when subscription information is empty
          </li>
          <li class="list-disc"> Fix product review bugs</li>
        </ul>
      </div>
    </>
  );
}

export default October2022;
