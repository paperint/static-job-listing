import React from "react";

function List({ list, handlerClick }) {
  return (
    <article className="flex flex-col gap-10 pt-12 md:gap-5">
      {list.map((item) => (
        <div
          key={item.id}
          className={`relative lg:hover:scale-105 ease-in duration-300 flex md:flex-row gap-5 flex-col md:items-center justify-between p-6 bg-white rounded-lg shadow-xl ${
            item.featured ? `border-l-8 border-root-Desaturated-Dark-Cyan` : ``
          }`}
        >
          <div className="flex items-center gap-4 py-4 border-b-2 md:py-0 md:justify-center md:border-none">
            <div className="max-md:-top-6 max-md:left-5 max-md:absolute max-md:w-12 max-md:h-12">
              <img src={item.logo} alt={item.company} className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="inline-flex flex-wrap gap-3 font-bold text-root-Desaturated-Dark-Cyan">
                {item.company}
                {item.new && (
                  <span className="px-2 py-1 text-xs rounded-2xl text-root-Light-Grayish-Cyan-Filter-Tablets bg-root-Desaturated-Dark-Cyan">
                    NEW!
                  </span>
                )}
                {item.featured && (
                  <span className="px-2 py-1 text-xs rounded-2xl text-root-Light-Grayish-Cyan-Filter-Tablets bg-root-Very-Dark-Grayish-Cyan">
                    FEATURED
                  </span>
                )}
              </p>
              <h2 className="text-xl font-bold cursor-pointer">
                {item.position}
              </h2>
              <ul className="flex flex-wrap gap-5 list-disc text-root-Dark-Grayish-Cyan">
                <li className="list-none"> {item.postedAt} </li>
                <li> {item.contract} </li>
                <li> {item.location} </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 py-3">
            <button
              onClick={() => handlerClick(item.role)}
              className="px-2 py-1 font-bold rounded-lg active:scale-110 hover:bg-root-Desaturated-Dark-Cyan hover:text-root-Light-Grayish-Cyan-Filter-Tablets text-root-Desaturated-Dark-Cyan bg-root-Light-Grayish-Cyan-Background"
            >
              {item.role}
            </button>
            <button
              onClick={() => handlerClick(item.level)}
              className="px-2 py-1 font-bold rounded-lg active:scale-110 hover:bg-root-Desaturated-Dark-Cyan hover:text-root-Light-Grayish-Cyan-Filter-Tablets text-root-Desaturated-Dark-Cyan bg-root-Light-Grayish-Cyan-Background"
            >
              {item.level}
            </button>
            {item.languages.map((item, index) => (
              <button
                key={index}
                onClick={() => handlerClick(item)}
                className="px-2 py-1 font-bold rounded-lg active:scale-110 hover:bg-root-Desaturated-Dark-Cyan hover:text-root-Light-Grayish-Cyan-Filter-Tablets text-root-Desaturated-Dark-Cyan bg-root-Light-Grayish-Cyan-Background"
              >
                {item}
              </button>
            ))}
            {item.tools.map((item, index) => (
              <button
                key={index}
                onClick={() => handlerClick(item)}
                className="px-2 py-1 font-bold rounded-lg active:scale-110 hover:bg-root-Desaturated-Dark-Cyan hover:text-root-Light-Grayish-Cyan-Filter-Tablets text-root-Desaturated-Dark-Cyan bg-root-Light-Grayish-Cyan-Background"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

export default List;
