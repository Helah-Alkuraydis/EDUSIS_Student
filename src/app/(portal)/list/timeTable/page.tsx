"use client";

import BigCalendar from "@/components/BigCalendar";

export default function MyCalendar() {


  return (
    // <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 gap-8 h-[calc(100vh-150px)] overflow-y-auto  ">
   <div className="flex flex-col xl:flex-row bg-white overflow-x-auto h-[calc(150vh-150px)]">
  <div className="w-full min-w-[1000px] xl:w-full">
    <div className="h-full w-full rounded-md flex flex-col">
      <h1 className="hidden md:block text-xl text-[#0A4D7E] font-semibold mb-4">
        جدول المحاضرات
      </h1>
      <div className="flex-1 rounded-2xl">
        <BigCalendar />
      </div>
    </div>
  </div>
</div>

  )
}