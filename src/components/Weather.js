function Weather() {
  return (
    <section aria-labelledby="recent-hires-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6 flex flex-col">
          <div className="flex flex-row border-b border-gray-300 pb-2">
            <h2
              className="text-xl font-medium text-gray-900"
              id="recent-hires-title"
            >
              Delhi, IN
            </h2>
            <div className="flex flex-1"></div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              Nov 22, 2021 01:30 PM
            </div>
          </div>
          <div className="flex flex-row py-4">
            <h2 className="">
              <span className="text-4xl font-semibold text-black">
                26&#176;
              </span>
              C
            </h2>
            <div className="flex flex-1"></div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-cloud"
              >
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
