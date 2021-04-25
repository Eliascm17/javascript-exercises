import { useRouter } from "next/router";
import { useState } from "react";
import Container from "../components/Container";
import Icon from "../components/Icon";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const onSearch = () => {
    router.push({ pathname: "/search", query: { q: searchInput } });
  };

  return (
    <Container>
      <div className="flex flex-start max-w-4xl w-full pl-16 space-x-2 mt-16 items-center py-2">
        <Icon name="search" className="h-6 w-6 fill-current text-white" />
        <h1 className="text-white text-2xl font-sans-apple-system mb-1">
          Search more than <span className="font=semibold">70M</span> users
        </h1>
      </div>
      <div className="flex flex-start max-w-3xl w-full space-x-4 pt-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          name="searchInput"
          autoComplete="off"
          className="max-w-2xl w-full text-white text-xs bg-black-bg focus:bg-black-bg border border-gray-700 focus:outline-none focus:border-blue-searchBorder focus:ring focus:ring-blue-searchRing rounded-md py-0.5 pl-2"
          placeholder="Search GitHub"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
        <button
          onClick={() => {
            searchInput.length > 0 ? onSearch() : "";
          }}
          className="text-gray-200 text-sm bg-black-button px-4 rounded-md ring-1 ring-gray-200 ring-opacity-0 hover:ring-opacity-50 transition ease-in-out duration-200"
        >
          Search
        </button>
      </div>
      <div className="flex flex-start max-w-3xl w-full text-white text-xs font-sans-apple-system mt-4">
        ProTip! For an&nbsp;
        <a className="text-xs text-blue-400 hover:underline" href="#">
          advanced search
        </a>
        , use some of our&nbsp;
        <a className="text-xs text-blue-400 hover:underline" href="#">
          prefixes
        </a>
      </div>
    </Container>
  );
}
