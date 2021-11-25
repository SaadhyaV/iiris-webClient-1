import avatar from "./avatar.jpg";

function TopNav(props) {
  return (
    <nav className="flex items-center px-6 py-6 border-b border-gray-200 fixed left-0 top-0 right-0 z-20 ml-20 justify-between min-h-16 max-h-16 transition duration-300 ease-in bg-white">
      {/* page title */}
      <div className="flex flex-row h-full text-xl font-semibold items-center flex-shrink-0 pr-4">
        <h1 className="text-xl font-semibold">
          <span className="flex-row">{props.title}</span>
        </h1>
      </div>

      {/* center whitespace */}
      <div className="flex flex-row h-full overflow-x-auto whitespace-nowrap"></div>

      {/* right side navigation */}
      <div className="flex flex-row h-full flex-shrink-0">
        <div className="flex flex-row justify-center items-center">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </div>
          {/* <div className="h-8 mx-4"></div> */}
          <div className="flex flex-row justify-center items-center">
            <button className="flex items-center border-0 p-0">
              <span>
                <img
                  src={avatar}
                  alt="user-avatar"
                  className="z-0 w-8 h-8 rounded-full"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
