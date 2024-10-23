import React, { useEffect, useState } from "react";
import { IoSearch } from "../../../../assets/icons";

import { Link } from "react-router-dom";
import {
  IoChevronBackOutline,
  IoChevronForward,
} from "../../../../assets/icons";
import gameHook from "../../../../hooks/gameHook";

const Casino = () => {
  const {
    gameCategory,
    categoryLoading,
    categoryError,
    fetchGames,
    games,
    gameLoading,
    gameError,
    getCategoryIcon,
  } = gameHook();

  useEffect(() => {
    fetchGames("all");
  }, []);

  return (
    <div className="px-3 py-5 md:px-16">
      <div className="md:flex justify-between items-center mb-4">
        <h6 className="text-white text-2xl mb-4 font-bold">Casino</h6>

        <div className="flex justify-center items-center space-x-2 text-white">
          <button
            onClick={() => fetchGames("all")}
            className="px-2 py-1 rounded-md bg-bg1 hover:bg-bg2 text-sm">
            All
          </button>
          {gameCategory.map((nav, index) => (
            <button
              key={index}
              onClick={() => fetchGames(nav.id)}
              className="px-2 py-1 rounded-md bg-bg1 hover:bg-bg2 text-sm capitalize flex justify-center items-center space-x-2">
              <span>{getCategoryIcon(nav.id)}</span>
              <span>{nav.category}</span>
            </button>
          ))}

          {/* <button className="px-2 py-1 rounded-md bg-gray-900 hover:bg-bg2 text-sm">
            <IoChevronBackOutline />
          </button>
          <button className="px-2 py-1 rounded-md bg-gray-900 hover:bg-bg2 text-sm">
            <IoChevronForward />
          </button> */}
        </div>
        <div className="md:w-[50%] w-full flex justify-center items-center space-x-2 bg-bg1 rounded-lg px-4">
          <IoSearch size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search game"
            className="bg-bg1 rounded-lg p-2 outline-none text-sm w-full text-white placeholder:text-gray-500"
          />
        </div>
      </div>
      {/* {gameError} */}
      <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
        {games.map((game, index) => (
          <>
            {game?.icon && (
              <>
                <Link to="" key={index} className="w-full">
                  <img
                    src={game?.icon}
                    alt={game?.title}
                    loading="lazy"
                    className="w-full h-52 rounded-xl object-cover"
                  />
                </Link>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Casino;
