"use client"
import Attendance from "@/components/Attendance"
import Bills from "@/components/bills"
import EnrolledCourses from "@/components/EnrolledCourses"
import * as React from "react"


const StudentPage = () => {
  return (
    <div className="w-full flex flex-col justify-between gap-10" >
    <EnrolledCourses/>
    <Attendance/>
    <Bills/>

    </div>
  )
}

export default StudentPage