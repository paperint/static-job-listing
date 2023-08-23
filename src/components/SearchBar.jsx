import React from "react";

function SearchBar({ search, handlerDeleted, handlerClear }) {
  return (
    <article className="absolute w-full pr-10 -top-10 ">
      <div className="flex justify-between h-20 gap-4 px-10 py-4 overflow-auto bg-white shadow-xl max-h-40 rounded-xl">
        <div className="flex flex-wrap gap-4">
          {search.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center justify-center gap-1 p-2 font-bold rounded-lg bg-root-Light-Grayish-Cyan-Filter-Tablets text-root-Desaturated-Dark-Cyan"
            >
              {item}
              <button
                onClick={() => handlerDeleted(index)}
                className="float-right px-2 py-1 text-white rounded-lg hover:bg-root-Very-Dark-Grayish-Cyan bg-root-Desaturated-Dark-Cyan"
              >
                X
              </button>
            </span>
          ))}
        </div>
        <div onClick={() => handlerClear()}>
          <p className="translate-y-1/2 cursor-pointer text-root-Desaturated-Dark-Cyan hover:underline active:underline active:scale-105 hover:font-bold">
            Clear
          </p>
        </div>
      </div>
    </article>
  );
}

export default SearchBar;
