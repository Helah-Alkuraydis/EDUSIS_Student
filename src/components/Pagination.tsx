

import { useState } from "react";

const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500 mt-7">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-m font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        السابق
      </button>
      <div className="flex items-center gap-2 text-m font-medium">
        <button className="px-2 rounded-sm bg-lamaSky">1</button>
        <button className="px-2 rounded-sm ">2</button>
        <button className="px-2 rounded-sm ">3</button>
        ...
        <button className="px-2 rounded-sm ">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-(--buttonColor) text-white text-m font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        التالي
      </button>
    </div>
  );
};

export default Pagination;