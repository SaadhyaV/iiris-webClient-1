import React from "react";

async function searchNews(q) {
  q = encodeURIComponent(q);
  const response = await fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "951f32aa1amsh20993368dfb60c1p104363jsn7e640c003754",
        "x-bingapis-sdk": "true",
      },
    }
  );
  const body = await response.json();
  return body.value;
}

function News() {
  const [query, setQuery] = React.useState("security");
  const [list, setList] = React.useState(null);

  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };

  return (
    <section aria-labelledby="announcements-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6">
          <h2
            className="text-xl font-medium text-gray-900 border-b border-gray-300 pb-2"
            id="announcements-title"
          >
            Trending News
          </h2>
          <div className="flow-root mt-6">
            {!list ? null : list.length === 0 ? (
              <p>
                <i>No results</i>
              </p>
            ) : (
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {list.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </ul>
            )}

            {/* <ul role="list" className="-my-5 divide-y divide-gray-200">
              <li className="py-5">
                <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                  <h3 className="text-sm font-semibold text-gray-800">
                    <a href="" className="hover:underline focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2"></p>
                </div>
              </li>
            </ul> */}
          </div>
          <div className="mt-6">
            <form onSubmit={search}>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-4 py-3 w-full"
              />
              <button className="w-full flex justify-center items-center px-4 py-3 border border-blue-300 shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Search
              </button>
            </form>
            {/* <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-3 border border-blue-300 shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View all
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ item }) {
  const separateWords = (s) => s.replace(/[A-Z][a-z]+/g, "$& ").trim();
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

  return (
    <li className="py-5">
      {/* {item.image && (
        <img
          className="thumbnail"
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      )} */}

      <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
        <h3 className="text-sm font-semibold text-gray-800">
          <a href={item.url} target="_blank">
            {item.name}
          </a>
        </h3>

        <p className="description">{item.description}</p>

        <div className="meta">
          <span>{formatDate(item.datePublished)}</span>

          <span className="provider">
            {item.provider[0].image?.thumbnail && (
              <img
                className="provider-thumbnail"
                alt=""
                src={item.provider[0].image.thumbnail.contentUrl + "&w=16&h=16"}
              />
            )}
            {item.provider[0].name}
          </span>

          {item.category && <span>{separateWords(item.category)}</span>}
        </div>
      </div>
    </li>
  );
}

export default News;
