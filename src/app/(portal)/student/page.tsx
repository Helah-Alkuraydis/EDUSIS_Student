"use client"
import Attendance from "@/components/Attendance"
import Bills from "@/components/bills"
import EnrolledCourses from "@/components/EnrolledCourses"
import LeftSide from "@/components/LeftSide"
import * as React from "react"


const StudentPage = () => {
  return (
    <div className="p-4 flex gap-8 xl:flex-row" >

      {/* 👉 اليمين: المحتوى الأساسي (الداشبورد مثلًا) */}
      <div className="w-full justify-start flex flex-col gap-10">
        <EnrolledCourses />
        <Attendance />
        <Bills />
      </div>
      
      {/* 👈 يسار: التقويم والفعاليات */}
      <div className="hidden xl:flex justify-center items-start ml-4 ">
        <LeftSide />
      </div>

    </div>
  )
}

export default StudentPage