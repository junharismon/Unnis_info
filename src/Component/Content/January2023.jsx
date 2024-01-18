function January2023() {
  return (
    <>
      <div id="content" class="relative lg:ml-20">
        <div class="">
          <div class="text-title text-2xl font-bold space-y-5 text-green-500">
            v2.6.23 (android) <span className="dateStyle">30 Jan 2023</span>
          </div>
          <div class="text-title text-2xl font-bold space-y-5 text-green-500">
            v1.5.17 (iPhone) <span className="dateStyle"> 30 Jan 2023</span>
          </div>
        </div>
        <div class="text-2xl font-bold mx-2 my-2">Updates:</div>
        <ul class="list-disc px-20">
          <li class="disc-list-text"> Change flow sign up</li>
          <li class="disc-list-text"> Add country product</li>
          <li class="disc-list-text">Change list feed and event in main menu
          </li>
        </ul>
        <div class="text-2xl font-bold mx-2 my-2">Bug Fixes:</div>
        <ul class="list-disc px-20">
        <li class="disc-list-text"> Fix image no data</li>
            <li class="disc-list-text"> Fix detail product</li>
        </ul>
      </div>
    </>
  );
}

export default January2023;
