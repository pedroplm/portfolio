import React from "react";

const Card = (props) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
      {/* overlay */}
      <div className="group-hover:bg-black/90 w-full h-full absolute z-40 transitional-all duration-300"></div>
      {/* image */}
      <img
        className="group-hover:scale-125 transition-all duration-300"
        src={props.img}
        alt="site photos"
      />
      {/* pretitle */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
        <span className="text-gradient text-[20px] ">{props.text}</span>
      </div>
      {/* tittle */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
        <span className="text-3xl text-white text-[20px]">{props.title}</span>
      </div>
    </div>
  );
};

export default Card;
