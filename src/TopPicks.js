import React from "react";
import { topPicks } from "./data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


const TopPicks = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-4">
        Top Picks
      </h1>
      <div className=" h-[200px] lg:flex max-w-full m-auto py-2 px-2">
        <Splide
          options={{ perPage: 3, gap: "1rem", drag: "free", arrows: true }}
          
        >
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl relative hover:scale-105 duration-300">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-2 pt-4 font-bold text-2xl ">
                      {item.title}
                    </p>
                    <p className="px-2">{item.price}</p>
                    <button className=" border-grey border bg-orange-700 text-white mx-2 absolute bottom-4">
                      Add To Cart
                    </button>
                  </div>
                  <img
                    className=" h-[200px]  lg:h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105  ease-out duration-300"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
