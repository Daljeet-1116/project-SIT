export default function FourCards() {
  return (
    <>
      <div className="bg-blue-100 h-[60rem]">
        <div className="max-w-7xl mx-auto px-6 py-10 ">
          <div className="flex justify-center items-center w-full mt-6">

            
            <div className="w-full max-w-lg flex items-center bg-white border border-gray-300 shadow-sm px-2 py-2  my-18">
              <input
                type="text"
                placeholder="Looking for busniess directory"
                className="flex-grow outline-none px-2 text-gray-700"
              />

              <button className="bg-red-600 hover:bg-red-600 text-white font-medium px-3 py-2">
                Search
              </button>
            </div>
          </div>

          <h2 className="text-2xl   text-red-600 font-bold h-full text-center mb-16">
            Featured Business
          </h2>
          {/* 1 card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white  rounded-2xl shadow-md overflow-hidden w-72">
              <img
                src="/images/card.jpg"
                alt="Company"
                className="w-full h-60 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-sm font-semibold">
                  Scorpio Infotech Real Estate
                </h3>
                <p className="text-sm text-gray-500">review</p>
              </div>
            </div>
            {/* 2 card  */}

            <div className="bg-white p-6  rounded-2xl shadow-md overflow-hidden w-72">
              <img
                src="/images/image.png"
                alt="Company"
                className="w-full h-60 object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h3 className="text-sm font-semibold">
                  Scorpio Infotech Real Estate
                </h3>
                <p className="text-sm text-gray-600">review</p>
              </div>
            </div>
            {/* 3 card */}
            <div className="bg-white  rounded-2xl shadow-md overflow-hidden w-72">
              <img
                src="/images/card.jpg"
                alt="Company"
                className="w-full h-60 object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h3 className="text-sm font-semibold">
                  Scorpio Infotech Real Estate
                </h3>
                <p className="text-sm text-gray-600">review</p>
              </div>
            </div>

            {/* 4 card */}
            <div className="bg-white p-6 rounded-2xl shadow-md overflow-hidden w-72">
              <img
                src="/images/image.png"
                alt="Company"
                className="w-full h-60 object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h3 className="text-sm font-semibold">
                  Scorpio Infotech Real Estate
                </h3>
                <p className="text-sm text-gray-600">review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
