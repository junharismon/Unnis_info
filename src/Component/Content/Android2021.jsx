function Android2021() {
  return (
    <>
      <div id="content" class="flex w-full lg:ml-20">
        <div className="lg:w-3/4">
        <p className="text-[36px] font-semibold text-green-500">
                UNNIS for Android
            </p>
            <div className="py-[0.3px] my-6 bg-gray-400"></div>
          <div id="v.2.0.0">
            <div className="text-[36px] font-semibold text-green-500">
              v.2.0.0<span className="dateStyle ps-2">11 Dec 2021</span>
            </div>
            <div class="text-2xl font-semibold mx-2 my-2">New Features</div>
            <ul class="list-disc px-12">
              <li class="list-disc">
                List event, feed, detail product, review product
              </li>
              <li class="list-disc">Like event and register event</li>
            </ul>
            <div class="text-2xl font-semibold mx-2 my-2">Updates</div>
            <ul class="list-disc px-12">
              <li class="list-disc">Add edit profile </li>
              <li class="list-disc">Modify the bottom navigation icon</li>
              <li class="list-disc">Add favorite product page</li>
              <li class="list-disc">Add buylink icon to the product list</li>
              <li class="list-disc">Add a friend invitation page</li>
              <li class="list-disc">Add infinite scroll to product list</li>
            </ul>
            <div class="text-2xl font-semibold mx-2 my-2">Bug Fixes</div>
            <ul class="list-disc px-12">
              <li class="list-disc">
                Form Sign In Social media (Google, Facebook, Twitter, etc)
              </li>
              <li class="list-disc">Fix ui bug </li>
              <li class="list-disc">Fix event review bugs</li>
              <li class="list-disc">Fix box review bugs</li>
              <li class="list-disc">Fix Main Navigation Bug</li>
              <li class="list-disc">Fix event page list bugs</li>
            </ul>
            <div className="py-[0.3px] my-6 bg-gray-400"></div>
          </div>
        </div>
        <div class="hidden lg:block lg:w-1/4 sticky top-0 lg:pl-20">
            <p className="mb-4 font-semibold text-green-500">
                UNNIS of Android
            </p>
          <ul class="text-gray-400">
            <li class="my-0.5 hover:text-black">
              <a href="#v.2.0.0">v.2.0.0 - 11 Dec 202</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Android2021;
