
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 bg-tds-purple rounded-sm flex items-center justify-center">
        <span className="text-white font-serif font-bold text-lg">TDS</span>
      </div>
      <div className="ml-2">
        <h1 className="text-tds-dark font-serif font-medium text-lg leading-tight">The Dream <span className="text-tds-purple">Stair</span></h1>
        <p className="text-tds-neutral-gray text-xs">Interior Design</p>
      </div>
    </div>
  );
};

export default Logo;
