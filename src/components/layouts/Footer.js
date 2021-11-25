function Footer() {
  return (
    <div className="flex flex-row justify-center border-t border-gray-300 px-6 py-0 h-16 max-h-16">
      <div className="flex flex-row flex-shrink flex-grow w-full justify-between items-center text-sm text-gray-700">
        <div className="flex items-center justify-end flex-row flex-grow flex-shrink">
          <div className="">
            &copy; {new Date().getFullYear()} Powered by IIRIS Digital. All
            rights reserved.
          </div>
        </div>
        {/* <div className="flex items-center flex-grow-0 flex-shrink-0">
          Made with&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#007fff"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
          &nbsp;in India
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
