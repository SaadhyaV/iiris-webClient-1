const announcements = [
  {
    id: 1,
    tweetText:
      "SC appoints retired Punjab and Haryana HC judge to monitor Lakhimpur Kheri case",
    href: "https://indianexpress.com/article/india/supreme-court-lakhimpur-kheri-violence-rakesh-kumar-jain-7627029/",
    tweetUser: "@zoo_bear",
    created_at: "2020-06-11T16:05:06.000Z",
  },
  {
    id: 2,
    tweetText:
      "SC appoints retired Punjab and Haryana HC judge to monitor Lakhimpur Kheri case",
    href: "https://indianexpress.com/article/india/supreme-court-lakhimpur-kheri-violence-rakesh-kumar-jain-7627029/",
    tweetUser: "@zoo_bear",
    created_at: "2020-06-11T16:05:06.000Z",
  },
  {
    id: 3,
    tweetText:
      "SC appoints retired Punjab and Haryana HC judge to monitor Lakhimpur Kheri case",
    href: "https://indianexpress.com/article/india/supreme-court-lakhimpur-kheri-violence-rakesh-kumar-jain-7627029/",
    tweetUser: "@zoo_bear",
    created_at: "2020-06-11T16:05:06.000Z",
  },
];

function Twitter() {
  return (
    <section aria-labelledby="announcements-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6">
          <h2
            className="text-xl font-medium text-gray-900 border-b border-gray-300 pb-2"
            id="announcements-title"
          >
            Recent Tweets
          </h2>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {announcements.map((announcement) => (
                <li key={announcement.id} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <a
                        href={announcement.href}
                        className="hover:underline focus:outline-none"
                      >
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {announcement.tweetText}
                      </a>
                    </h3>
                    <div className="flex flex-row mt-2">
                      <span className="flex-row text-xs text-gray-600 line-clamp-2">
                        2021-19-11 07:25
                      </span>
                      <span className="flex-1"></span>
                      <span className="text-xs text-blue-600 line-clamp-2">
                        Tweet by @zoo_bear
                      </span>
                    </div>

                    {/* <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {announcement.preview}
                    </p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="mt-6">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-3 border border-blue-300 shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View all
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Twitter;
