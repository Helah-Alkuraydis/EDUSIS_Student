
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"



const EnrolledCourses = () => {
  return (
     <div className="w-full flex flex-col gap-4 ">
        <div className="w-full flex items-center justify-between">
          <span className="text-(--graytext) font-semibold text-m">المقررات المسجلة</span>
           <Link href ="/list/timeTable" className="text-(--buttonColor) font-semibold text-m hover:bg-gray-500/10 rounded-2xl p-1 pr-2 pl-2" >عرض الكل</Link>
        </div>

        <div className="w-full flex items-center justify-between gap-4">

          <div className="w-full h-full p-4 bg-[#EAF1FF] flex flex-col gap-4 items-start rounded-2xl justify-center ">
            <span className= "text-[#0A4D7E] font-bold text-xl ml-10">أساسيات قواعد البيانات</span>
            <div className={"flex flex-col gap-3"}>
              <div className=" flex gap-1 items-center">
              <Calendar size={19} strokeWidth={2} color={"#0A4D7E"}/>
              <span className="text-(--graytext) font-medium text-xs">الأحد - الخميس</span>
            </div>
            <div className=" flex gap-1 items-center">
              <Clock  size={19} strokeWidth={2} color={"#0A4D7E"}/>
              <span className="text-(--graytext) font-medium text-xs">1:30 PM - 3:00 PM</span>
            </div>
            </div>
          </div>

           <div className="w-full h-full p-4 bg-[#EAF1FF] flex flex-col gap-4 items-start rounded-2xl justify-center">
            <span className= "text-[#0A4D7E] font-bold text-xl ml-10">البرمجة الكائنية</span>
            <div className={"flex flex-col gap-3"}>
              <div className=" flex gap-1 items-center">
              <Calendar size={19} strokeWidth={2} color={"#0A4D7E"}/>
              <span className="text-(--graytext) font-medium text-xs">الأحد - الخميس</span>
            </div>
            <div className=" flex gap-1 items-center">
              <Clock  size={19} strokeWidth={2} color={"#0A4D7E"}/>
              <span className="text-(--graytext) font-medium text-xs">1:30 PM - 3:00 PM</span>
            </div>
            </div>
          </div>


          <div className="w-full h-full p-4 bg-[#EAF1FF] flex flex-col gap-4 items-start rounded-2xl justify-center">
            <span className= "text-[#0A4D7E] font-bold text-xl ml-10">البرمجة الكائنية</span>
            <div className={"flex flex-col gap-3"}>
              <div className=" flex gap-1 items-center">
              <Calendar size={19} strokeWidth={2} color={"#0A4D7E"}/>
              <span className="text-(--graytext) font-medium text-xs">الأحد - الخميس</span>
            </div>
            <div className=" flex gap-1 items-center">
              <Clock  size={19} strokeWidth={2} color={"#0A4D7E"}/>
              <span className="text-(--graytext) font-medium text-xs">1:30 PM - 3:00 PM</span>
            </div>
            </div>
          </div>

        </div>
      </div>

  )
}

export default EnrolledCourses