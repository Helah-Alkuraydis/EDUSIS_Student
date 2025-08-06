"use client";

import BigCalendar from "@/components/BigCalendar";

export default function MyCalendar() {
    

  return (
    // <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 gap-8 h-[calc(100vh-150px)] overflow-y-auto  ">
     <div className="p-4 flex gap-4 flex-col xl:flex-row">
     <div className="w-full xl:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md">
         <h1 className="hidden md:block text-xl text-[#0A4D7E] font-semibold mb-5 ">جدول المحاضرات</h1>
          <BigCalendar/>
        </div>
      </div>
    </div>
  )
}