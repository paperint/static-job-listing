import React, { useEffect, useState } from "react";
import data from "../data/data.js";
import HeaderCover from "../components/HeaderCover.jsx";
import List from "../components/List.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Homepage() {
  const [search, setSearch] = useState([]);
  const [newData, setNewData] = useState(null);
  const list = newData !== null ? newData : data;
  const [alertShown, setAlertShown] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlertShown(false);
    }, 5000);
  });

  const handlerClick = (value) => {
    if (!search.includes(value)) {
      setSearch((prevSearch) => [...prevSearch, value]);
    }
  };

  const searchByTag = () => {
    if (search.length > 0) {
      const filterData = data.filter((item) => {
        const filters = [
          item.role,
          item.level,
          ...item.languages,
          ...item.tools,
        ];
        return search.every((filter) => filters.includes(filter));
      });
      setNewData(filterData);
    }
  };

  useEffect(() => {
    searchByTag();
  }, [search]);

  const handlerDeleted = (inputIndex) => {
    const newSearch = search.filter((item, index) => index !== inputIndex);
    setSearch(newSearch);
  };

  const handlerClear = () => {
    setSearch([]);
    setNewData(null);
  };

  return (
    <>
      {alertShown && (
        <div className="absolute w-full rounded-full max-w-7xl top-10 ">
          <p className="w-full text-center ease-in-out max-w-7xl animate-bounce">
            Click Tag To Filter
          </p>
        </div>
      )}
      <header>
        <HeaderCover />
      </header>
      <main className="bg-root-Light-Grayish-Cyan-Background">
        <section className="relative w-full p-10 mx-auto max-w-7xl">
          {search.length > 0 && (
            <SearchBar
              search={search}
              handlerDeleted={handlerDeleted}
              handlerClear={handlerClear}
            />
          )}

          <List list={list} handlerClick={handlerClick} />
        </section>
      </main>
    </>
  );
}

export default Homepage;
